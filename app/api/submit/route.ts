import { NextRequest, NextResponse } from 'next/server'

interface FormData {
  restaurantName: string
  contactPerson: string
  phoneNumber: string
  email: string
  googleMapsLink: string
  discountDetails: string
  notes?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: FormData = await request.json()

    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL

    if (!n8nWebhookUrl) {
      console.error('N8N_WEBHOOK_URL not configured')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`n8n webhook failed: ${response.status}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Form submission failed:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
