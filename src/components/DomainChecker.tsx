'use client'

import { useState, useEffect } from 'react'
import { MaintenancePage } from './MaintenancePage'

interface DomainCheckerProps {
  children: React.ReactNode
}

export function DomainChecker({ children }: DomainCheckerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showMaintenance, setShowMaintenance] = useState(false)

  useEffect(() => {
    const checkDomain = () => {
      const hostname = window.location.hostname
      const shouldShowMaintenance = hostname === 'www.esherrlich.de' || hostname === 'esherrlich.de'
      setShowMaintenance(shouldShowMaintenance)
      setIsLoading(false)
    }

    checkDomain()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white" />
      </div>
    )
  }

  if (showMaintenance) {
    return <MaintenancePage />
  }

  return <>{children}</>
}
