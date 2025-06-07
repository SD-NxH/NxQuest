import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, FlameIcon as Fire, Diamond, Trophy } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto py-3 px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-rose-500" />
              <h1 className="text-xl font-bold text-gray-800">NxQuest</h1>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <div className="bg-red-100 rounded-full p-1">
                  <Heart className="h-5 w-5 text-red-500" />
                </div>
                <span className="font-bold">5</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="bg-amber-100 rounded-full p-1">
                  <Fire className="h-5 w-5 text-amber-500" />
                </div>
                <span className="font-bold">7</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="bg-blue-100 rounded-full p-1">
                  <Diamond className="h-5 w-5 text-blue-500" />
                </div>
                <span className="font-bold">320</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="bg-rose-500 text-white rounded-xl p-4 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm font-medium opacity-90">SECTION 1, UNIT 1</div>
              <h2 className="text-2xl font-bold">Breaking Free From FOOD</h2>
            </div>
            <Button variant="ghost" className="text-white hover:bg-rose-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-list"
              >
                <line x1="8" x2="21" y1="6" y2="6" />
                <line x1="8" x2="21" y1="12" y2="12" />
                <line x1="8" x2="21" y1="18" y2="18" />
                <line x1="3" x2="3.01" y1="6" y2="6" />
                <line x1="3" x2="3.01" y1="12" y2="12" />
                <line x1="3" x2="3.01" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="relative flex flex-col items-center max-w-md mx-auto pb-20">
          {/* Path connecting lessons */}
          <div className="absolute h-full w-1 bg-gray-200 left-1/2 transform -translate-x-1/2 z-0"></div>

          {/* Day 1 - Completed */}
          <LessonNode
            title="Day 1: The Nature of Food Addiction"
            type="completed"
            icon={<span className="text-sm font-bold">1</span>}
            href="/lessons/1"
          />

          {/* Day 2 - Current */}
          <LessonNode
            title="Day 2: Identifying Your Triggers"
            type="current"
            icon={<span className="text-sm font-bold">2</span>}
            href="/lessons/2"
            character="/placeholder.svg?height=120&width=100"
          />

          {/* Day 3 - Available */}
          <LessonNode
            title="Day 3: Emotional Connection to Food"
            type="available"
            icon={<span className="text-sm font-bold">3</span>}
            href="/lessons/3"
          />

          {/* Day 4 - Available Orange */}
          <LessonNode
            title="Day 4: Breaking the Physical Cycle"
            type="available-orange"
            icon={<span className="text-sm font-bold">4</span>}
            href="/lessons/4"
          />

          {/* Day 5 - Available Purple */}
          <LessonNode
            title="Day 5: Mindful Eating & Body Awareness"
            type="available-purple"
            icon={<span className="text-sm font-bold">5</span>}
            href="/lessons/5"
          />

          {/* Day 6 - Available Teal */}
          <LessonNode
            title="Day 6: Creating Supportive Environment"
            type="available-teal"
            icon={<span className="text-sm font-bold">6</span>}
            href="/lessons/6"
          />

          {/* Day 7 - Available Pink */}
          <LessonNode
            title="Day 7: Self-Compassion & Forgiveness"
            type="available-pink"
            icon={<span className="text-sm font-bold">7</span>}
            href="/lessons/7"
          />

          {/* Week 1 Checkpoint */}
          <div className="relative z-10 my-4">
            <div className="bg-amber-400 rounded-lg p-3 w-20 h-20 flex items-center justify-center transform transition-transform hover:scale-105 cursor-pointer">
              <Trophy className="h-10 w-10 text-white" />
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-amber-500 text-white">WEEK 1 QUIZ</Badge>
            </div>
          </div>

          {/* Day 8 - Locked */}
          <LessonNode
            title="Day 8: Sustainable Eating Plan"
            type="locked"
            icon={<span className="text-sm font-bold">8</span>}
            href="/lessons/8"
          />

          {/* Day 9 - Locked */}
          <LessonNode
            title="Day 9: Managing Cravings Effectively"
            type="locked"
            icon={<span className="text-sm font-bold">9</span>}
            href="/lessons/9"
          />

          {/* Day 10 - Locked */}
          <LessonNode
            title="Day 10: Power of Movement & Exercise"
            type="locked"
            icon={<span className="text-sm font-bold">10</span>}
            href="/lessons/10"
          />

          {/* Day 11 - Locked */}
          <LessonNode
            title="Day 11: Stress Management & Emotional Regulation"
            type="locked"
            icon={<span className="text-sm font-bold">11</span>}
            href="/lessons/11"
          />

          {/* Day 12 - Locked */}
          <LessonNode
            title="Day 12: Setting Goals & Tracking Progress"
            type="locked"
            icon={<span className="text-sm font-bold">12</span>}
            href="/lessons/12"
          />

          {/* Day 13 - Locked */}
          <LessonNode
            title="Day 13: Relapse Prevention & Building Resilience"
            type="locked"
            icon={<span className="text-sm font-bold">13</span>}
            href="/lessons/13"
          />

          {/* Day 14 - Final Challenge */}
          <div className="relative z-10 mt-4">
            <div className="bg-rose-500 text-white rounded-lg p-3 w-24 h-24 flex flex-col items-center justify-center transform transition-transform hover:scale-105 cursor-not-allowed opacity-70">
              <span className="text-2xl font-bold">14</span>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 40 20" fill="none">
                  <path d="M20 0L40 20H0L20 0Z" fill="#f43f5e" />
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-rose-600 text-white">CELEBRATING SUCCESS</Badge>
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <FooterButton
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-home"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              }
              active
            />
            <FooterButton
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-book-open"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              }
            />
            <FooterButton
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trophy"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              }
            />
            <FooterButton
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              }
            />
          </div>
        </div>
      </footer>
    </div>
  )
}

function LessonNode({ title, type, icon, href, character = null }) {
  const getNodeStyles = () => {
    switch (type) {
      case "completed":
        return {
          node: "bg-green-500 text-white cursor-pointer hover:bg-green-600",
          badge: "bg-green-600 text-white",
        }
      case "current":
        return {
          node: "bg-blue-500 text-white cursor-pointer hover:bg-blue-600",
          badge: "bg-blue-600 text-white",
        }
      case "available":
        return {
          node: "bg-red-500 text-white cursor-pointer hover:bg-red-600",
          badge: "bg-red-600 text-white",
        }
      case "available-orange":
        return {
          node: "bg-orange-500 text-white cursor-pointer hover:bg-orange-600",
          badge: "bg-orange-600 text-white",
        }
      case "available-purple":
        return {
          node: "bg-purple-500 text-white cursor-pointer hover:bg-purple-600",
          badge: "bg-purple-600 text-white",
        }
      case "available-teal":
        return {
          node: "bg-teal-500 text-white cursor-pointer hover:bg-teal-600",
          badge: "bg-teal-600 text-white",
        }
      case "available-pink":
        return {
          node: "bg-pink-500 text-white cursor-pointer hover:bg-pink-600",
          badge: "bg-pink-600 text-white",
        }
      case "locked":
        return {
          node: "bg-gray-300 text-gray-500 cursor-not-allowed opacity-70",
          badge: "bg-gray-400 text-white",
        }
      default:
        return {
          node: "bg-gray-300 text-gray-500",
          badge: "bg-gray-400 text-white",
        }
    }
  }

  const styles = getNodeStyles()

  return (
    <div className="relative z-10 my-4 flex items-center justify-center w-full">
      <Link href={href} className="block">
        <div
          className={`rounded-full w-16 h-16 flex items-center justify-center transform transition-transform ${type !== "locked" ? "hover:scale-110" : ""} ${styles.node}`}
        >
          {icon}
        </div>
      </Link>

      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
        <Badge className={styles.badge}>{title}</Badge>
      </div>

      {type === "completed" && (
        <div className="absolute -right-2 -top-2 bg-green-100 rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-600"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
      )}
    </div>
  )
}

function FooterButton({ icon, active = false }) {
  return <button className={`p-2 rounded-full ${active ? "text-rose-500" : "text-gray-500"}`}>{icon}</button>
}
