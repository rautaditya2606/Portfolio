import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const LOG_PATH = path.resolve(process.cwd(), 'public', 'visitlog.json')

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'
    const now = new Date().toISOString()
    let os = 'Unknown'
    let device = 'Unknown'
    if (userAgent.includes('Windows')) os = 'Windows'
    else if (userAgent.includes('Macintosh')) os = 'MacOS'
    else if (userAgent.includes('Linux')) os = 'Linux'
    else if (userAgent.includes('Android')) os = 'Android'
    else if (userAgent.includes('iPhone') || userAgent.includes('iPad')) os = 'iOS'
    if (/Mobile|Android|iPhone|iPad/i.test(userAgent)) device = 'Mobile'
    else device = 'Desktop'

    // Read existing logs
    let logs = []
    try {
      const data = await fs.readFile(LOG_PATH, 'utf-8')
      logs = JSON.parse(data)
    } catch (e) {
      logs = []
    }
    // Add new log
    logs.push({ ip, userAgent, os, device, timestamp: now })
    await fs.writeFile(LOG_PATH, JSON.stringify(logs, null, 2))
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to log visitor' }, { status: 500 })
  }
} 