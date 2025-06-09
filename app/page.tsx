"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, FlameIcon as Fire, Diamond, Trophy } from "lucide-react"
import { useState } from "react"
import { CheckCircle, X, Star, Zap } from "lucide-react"

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

          {/* Week 1 Checkpoint - Interactive Quiz */}
          <Week1Quiz />

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

function Week1Quiz() {
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const questions = [
    {
      day: 1,
      question: "What brain system is primarily activated by highly palatable foods?",
      options: ["Digestive system", "Reward system", "Nervous system", "Immune system"],
      correct: 1,
      vocab: "Reward System",
    },
    {
      day: 2,
      question: "Which of these is a common emotional trigger for food addiction?",
      options: ["Happiness", "Stress", "Exercise", "Sleep"],
      correct: 1,
      vocab: "Emotional Triggers",
    },
    {
      day: 3,
      question: "What is emotional eating primarily used for?",
      options: ["Nutrition", "Coping mechanism", "Social bonding", "Energy boost"],
      correct: 1,
      vocab: "Emotional Eating",
    },
    {
      day: 4,
      question: "What happens during the physical cycle of food addiction?",
      options: ["Increased metabolism", "Dopamine release and cravings", "Better digestion", "Improved sleep"],
      correct: 1,
      vocab: "Physical Cycle",
    },
    {
      day: 5,
      question: "Mindful eating focuses on:",
      options: ["Eating faster", "Awareness and presence", "Counting calories", "Avoiding all foods"],
      correct: 1,
      vocab: "Mindful Eating",
    },
    {
      day: 6,
      question: "A supportive environment includes:",
      options: [
        "Keeping trigger foods visible",
        "Stocking healthy alternatives",
        "Eating alone always",
        "Avoiding meal planning",
      ],
      correct: 1,
      vocab: "Supportive Environment",
    },
    {
      day: 7,
      question: "Self-compassion in recovery means:",
      options: [
        "Being harsh with yourself",
        "Treating yourself with kindness",
        "Giving up easily",
        "Ignoring mistakes",
      ],
      correct: 1,
      vocab: "Self-Compassion",
    },
  ]

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1)
    }

    setShowResult(false)
    setSelectedAnswer(null)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setQuizCompleted(false)
    setIsQuizOpen(false)
  }

  if (!isQuizOpen) {
    return (
      <div className="relative z-10 my-4">
        <div
          className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg p-3 w-20 h-20 flex items-center justify-center transform transition-transform hover:scale-105 cursor-pointer shadow-lg border-2 border-amber-300"
          onClick={() => setIsQuizOpen(true)}
        >
          <Trophy className="h-10 w-10 text-white animate-pulse" />
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-amber-500 text-white animate-bounce">WEEK 1 QUIZ</Badge>
        </div>
      </div>
    )
  }

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="relative z-10 my-8 max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-xl p-6 border border-purple-500/30 text-white">
          <div className="text-center">
            <div className="mb-4">
              {percentage >= 80 ? (
                <Star className="h-16 w-16 text-yellow-400 mx-auto animate-spin" />
              ) : percentage >= 60 ? (
                <Trophy className="h-16 w-16 text-amber-400 mx-auto" />
              ) : (
                <Zap className="h-16 w-16 text-blue-400 mx-auto" />
              )}
            </div>
            <h3 className="text-2xl font-bold mb-2">Quest Complete!</h3>
            <p className="text-lg mb-4">
              You scored {score} out of {questions.length} ({percentage}%)
            </p>

            {percentage >= 80 && (
              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3 mb-4">
                <p className="text-yellow-300 font-semibold">🏆 Master Achievement Unlocked!</p>
                <p className="text-sm">You've mastered the fundamentals of food addiction recovery!</p>
              </div>
            )}

            {percentage >= 60 && percentage < 80 && (
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3 mb-4">
                <p className="text-blue-300 font-semibold">⭐ Good Progress!</p>
                <p className="text-sm">You're on the right track. Review and try again!</p>
              </div>
            )}

            {percentage < 60 && (
              <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-3 mb-4">
                <p className="text-orange-300 font-semibold">💪 Keep Learning!</p>
                <p className="text-sm">Review the lessons and challenge yourself again!</p>
              </div>
            )}

            <Button
              onClick={resetQuiz}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="relative z-10 my-8 max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-xl p-6 border border-purple-500/30 text-white">
        {/* Quiz Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-amber-400" />
            <span className="font-bold">Week 1 Quiz</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">
              Question {currentQuestion + 1}/{questions.length}
            </span>
            <span className="text-sm">Score: {score}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
          <div
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        {/* Question */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge className="bg-purple-600">Day {question.day}</Badge>
            <Badge variant="outline" className="border-blue-500 text-blue-300">
              {question.vocab}
            </Badge>
          </div>
          <h3 className="text-xl font-semibold mb-4">{question.question}</h3>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  selectedAnswer === index
                    ? "border-purple-400 bg-purple-500/20"
                    : "border-gray-600 bg-gray-800/50 hover:border-gray-500"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === index ? "border-purple-400 bg-purple-500" : "border-gray-500"
                    }`}
                  >
                    {selectedAnswer === index && <CheckCircle className="h-4 w-4 text-white" />}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => setIsQuizOpen(false)}
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            <X className="h-4 w-4 mr-2" />
            Close Quiz
          </Button>

          <Button
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50"
          >
            {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  )
}
