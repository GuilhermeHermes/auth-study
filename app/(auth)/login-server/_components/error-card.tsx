'use client'

interface Props {
    error: string;
    }

export default function ErrorCard ({ error }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800">{error}</h2>
      <p className="text-gray-600 mt-2">Please try again later.</p>
    </div>
  )
}