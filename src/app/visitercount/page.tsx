"use client"

import { useState, useEffect } from 'react'

const PASSWORD = "aditya2025" // Change this to your desired password

export default function VisiterCountPage() {
  const [input, setInput] = useState("")
  const [authed, setAuthed] = useState(false)
  const [logs, setLogs] = useState<any[]>([])
  const [error, setError] = useState("")
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (input === PASSWORD) {
      setAuthed(true)
      setError("")
      // Fetch logs
      const res = await fetch("/visitlog.json")
      if (res.ok) {
        const data = await res.json()
        setLogs(data.reverse())
      }
    } else {
      setError("Incorrect password")
    }
  }

  if (!hasMounted) return null

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Visitor Logs</h1>
        {!authed ? (
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <input
              type="password"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Enter password"
              className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
            <button type="submit" className="px-6 py-2 rounded bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold">View Logs</button>
            {error && <div className="text-red-500 text-sm">{error}</div>}
          </form>
        ) : (
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded-lg">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="px-4 py-2 border">OS</th>
                  <th className="px-4 py-2 border">Device</th>
                  <th className="px-4 py-2 border">Time</th>
                  <th className="px-4 py-2 border">IP</th>
                  <th className="px-4 py-2 border">User Agent</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log, i) => (
                  <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2 border">{log.os}</td>
                    <td className="px-4 py-2 border">{log.device}</td>
                    <td className="px-4 py-2 border">{new Date(log.timestamp).toLocaleString()}</td>
                    <td className="px-4 py-2 border">{log.ip}</td>
                    <td className="px-4 py-2 border text-xs break-all max-w-xs">{log.userAgent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
} 