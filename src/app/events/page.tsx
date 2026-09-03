
"use client";

import { useState, useEffect } from "react";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EventsPage() {
  const eventsData = [
    {
      dayName: "Tue",
      dayNum: "29",
      monthName: "October, 2024",
      badgeBg: "bg-emerald-500 text-black font-bold",
      events: [
        {
          title: "AM - Innovation Challenge Finale",
          location: "TBD",
          time: "9:00 AM"
        },
        {
          title: "Ibom Heritage Cultural Night",
          subtitle: "Strictly by Reservation",
          location: "Unity Museum, Uyo",
          time: "4:00 PM"
        }
      ]
    },
    {
      dayName: "Wed",
      dayNum: "30",
      monthName: "October, 2024",
      badgeBg: "bg-blue-600 text-white font-bold",
      events: [
        {
          title: "Conference Day",
          location: "Venue: Ibom Golf Resort",
          time: "9:00 AM"
        }
      ]
    },
    {
      dayName: "Thur",
      dayNum: "31",
      monthName: "October, 2024",
      badgeBg: "bg-amber-500 text-black font-bold",
      events: [
        {
          title: "Career Fair & Creative Showcase",
          location: "Ibom e-library",
          time: "10:00 AM"
        }
      ]
    },
    {
      dayName: "Fri",
      dayNum: "01",
      monthName: "November, 2024",
      badgeBg: "bg-pink-600 text-white font-bold",
      events: [
        {
          title: "Ecosystem Hub Tours",
          location: "Muster point to be announced",
          time: ""
        }
      ]
    },
    {
      dayName: "Sat",
      dayNum: "02",
      monthName: "November, 2024",
      badgeBg: "bg-cyan-500 text-black font-bold",
      events: [
        {
          title: "Dev Fest Uyo",
          location: "Je-Nissi Event Center, 7 Akpa Ube Street Uyo",
          time: "10:00 AM"
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col bg-[#0b0b0c] text-white min-h-screen py-12 px-4 md:px-8">
      {/* Outer Card Wrapper matching reference image */}
      <div className="max-w-3xl mx-auto w-full bg-[#161618] border border-zinc-800/80 rounded-2xl p-6 md:p-12 shadow-2xl">
        
        {/* Header */}
        <div className="mb-12 flex items-center space-x-3">
          <div className="w-3.5 h-3.5 bg-emerald-500 rounded-[2px]" />
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Week at a glance
          </h1>
        </div>

        {/* Events List */}
        <div className="space-y-10">
          {eventsData.map((group, groupIndex) => (
            <div key={groupIndex} className="relative">
              {groupIndex > 0 && (
                <div className="border-t border-zinc-800/80 my-8" />
              )}

              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                {/* Left Date Block */}
                <div className="w-full md:w-44 shrink-0 flex md:flex-col items-center md:items-start justify-between md:justify-start">
                  <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-1">
                    <span className={`inline-block px-3 py-0.5 text-xs rounded-md uppercase tracking-wider ${group.badgeBg}`}>
                      {group.dayName}
                    </span>
                    <div className="flex items-baseline md:flex-col">
                      <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mr-2 md:mr-0">
                        {group.dayNum}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs md:text-sm text-zinc-400 font-medium mt-1">
                    {group.monthName}
                  </span>
                </div>

                {/* Vertical Blue/Cyan Divider */}
                <div className="hidden md:block w-[2px] bg-sky-500/80 self-stretch my-1 rounded-full" />

                {/* Right Events Column */}
                <div className="flex-1 space-y-6 w-full">
                  {group.events.map((evt, evtIdx) => (
                    <div key={evtIdx} className="space-y-1.5">
                      <h3 className="text-lg md:text-xl font-bold text-white">
                        {evt.title}
                      </h3>
                      {evt.subtitle && (
                        <p className="text-sm font-medium text-zinc-300">
                          {evt.subtitle}
                        </p>
                      )}
                      <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-zinc-400 pt-1">
                        {evt.location && (
                          <div className="flex items-center text-zinc-300">
                            <MapPin className="h-3.5 w-3.5 mr-1.5 text-sky-400 shrink-0" />
                            <span>{evt.location}</span>
                          </div>
                        )}
                        {evt.time && (
                          <div className="flex items-center text-zinc-300">
                            <Clock className="h-3.5 w-3.5 mr-1.5 text-amber-400 shrink-0" />
                            <span>{evt.time}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <span>Rotary Club of Source of the Nile • Upcoming Schedule</span>
          <Button variant="outline" size="sm" className="bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700 rounded-full" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>

      </div>
    </div>
  );
}


