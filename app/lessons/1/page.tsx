"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, HelpCircle, Volume2 } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

// Add custom styles for animations
const customStyles = `
  @keyframes slide-in-right {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  .animate-slide-in-right {
    animation: slide-in-right 0.5s ease-out;
  }
`

function MatchingGame() {
  const [matches, setMatches] = useState({})
  const [selectedTerm, setSelectedTerm] = useState(null)
  const [gameComplete, setGameComplete] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [attempts, setAttempts] = useState(0)

  const terms = [
    {
      id: 1,
      term: "Food Addiction",
      definition: "A persistent preoccupation with food and compulsive eating behaviors",
    },
    { id: 2, term: "YFAS", definition: "Yale Food Addiction Scale - a tool to assess addictive-like eating behaviors" },
    { id: 3, term: "Dopamine", definition: "A neurotransmitter associated with pleasure and reward in the brain" },
    { id: 4, term: "Tolerance", definition: "Needing increasingly larger amounts to achieve the same effect" },
  ]

  const shuffledDefinitions = [...terms].sort(() => Math.random() - 0.5)

  const handleTermClick = (termId) => {
    if (matches[termId] || gameComplete) return // Already matched or game complete
    setSelectedTerm(termId)
  }

  const handleDefinitionClick = (defId) => {
    if (!selectedTerm || gameComplete) return
    if (Object.values(matches).includes(defId)) return // Definition already used

    setAttempts((prev) => prev + 1)

    if (selectedTerm === defId) {
      // Correct match - but don't show feedback yet
      setMatches((prev) => ({ ...prev, [selectedTerm]: defId }))
      setSelectedTerm(null)

      // Check if game is complete
      if (Object.keys(matches).length === terms.length - 1) {
        setGameComplete(true)
        setShowResults(true)
      }
    } else {
      // Wrong match - just deselect, no feedback
      setSelectedTerm(null)
    }
  }

  const resetGame = () => {
    setMatches({})
    setSelectedTerm(null)
    setGameComplete(false)
    setShowResults(false)
    setAttempts(0)
  }

  const allCorrect = Object.keys(matches).length === terms.length

  return (
    <div className="space-y-4">
      {showResults && (
        <div
          className={`border rounded-lg p-4 text-center ${
            allCorrect ? "bg-green-100 border-green-300" : "bg-yellow-100 border-yellow-300"
          }`}
        >
          {allCorrect ? (
            <span className="text-green-800 font-bold">
              🎉 Perfect! All terms matched correctly! +25 XP
              <br />
              <span className="text-sm">Completed in {attempts} attempts</span>
            </span>
          ) : (
            <div className="text-yellow-800">
              <span className="font-bold">Keep trying! You need all matches correct to proceed.</span>
              <br />
              <button
                onClick={resetGame}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      )}

      {!showResults && (
        <div className="bg-blue-100 border border-blue-200 rounded-lg p-3 text-center">
          <span className="text-blue-800 text-sm">
            Match all terms with their definitions. No feedback until you complete all matches!
            <br />
            Attempts: {attempts}
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Terms Column */}
        <div>
          <h5 className="font-medium text-white mb-3 bg-blue-600 px-3 py-2 rounded-lg">Terms</h5>
          <div className="space-y-2">
            {terms.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTermClick(item.id)}
                disabled={matches[item.id] || gameComplete}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all font-medium ${
                  matches[item.id] && showResults
                    ? "bg-green-100 border-green-400 text-green-900"
                    : matches[item.id] && !showResults
                      ? "bg-blue-200 border-blue-400 text-blue-900"
                      : selectedTerm === item.id
                        ? "bg-blue-100 border-blue-500 text-blue-900 shadow-lg"
                        : "bg-white border-gray-300 hover:border-blue-400 hover:bg-blue-50 text-gray-900 shadow-md"
                }`}
              >
                <span className="text-base font-semibold">{item.term}</span>
                {matches[item.id] && showResults && <span className="ml-2 text-green-600">✓</span>}
                {matches[item.id] && !showResults && <span className="ml-2 text-blue-600">●</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Definitions Column */}
        <div>
          <h5 className="font-medium text-white mb-3 bg-blue-600 px-3 py-2 rounded-lg">Definitions</h5>
          <div className="space-y-2">
            {shuffledDefinitions.map((item) => {
              const isMatched = Object.values(matches).includes(item.id)

              return (
                <button
                  key={item.id}
                  onClick={() => handleDefinitionClick(item.id)}
                  disabled={isMatched || gameComplete}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    isMatched && showResults
                      ? "bg-green-100 border-green-400 text-green-900"
                      : isMatched && !showResults
                        ? "bg-blue-200 border-blue-400 text-blue-900"
                        : selectedTerm
                          ? "bg-white border-gray-300 hover:border-blue-400 hover:bg-blue-50 text-gray-900 shadow-md"
                          : "bg-gray-100 border-gray-300 text-gray-700 shadow-sm"
                  }`}
                >
                  <span className="text-sm font-medium leading-relaxed">{item.definition}</span>
                  {isMatched && showResults && <span className="ml-2 text-green-600">✓</span>}
                  {isMatched && !showResults && <span className="ml-2 text-blue-600">●</span>}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-blue-600">
        {gameComplete
          ? allCorrect
            ? "Excellent work! All matches are correct!"
            : "Review your matches and try again."
          : selectedTerm
            ? "Now click the matching definition!"
            : "Click a term to start matching!"}
      </div>
    </div>
  )
}

export default function NutritionLesson() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showFeedback, setShowFeedback] = useState(false)

  const steps = [
    {
      type: "content",
      title: "Defining Food Addiction",
      content: (
        <div className="space-y-4">
          <p>
            Food addiction can be defined by a persistent preoccupation with food, encompassing thoughts about what to
            eat, when to eat, and how to obtain more food. This obsession is often accompanied by overeating behaviors,
            attempts to hide or hoard food, secretive eating habits, and an inability to stop overeating or to cease
            eating certain foods altogether.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-4 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Match the Terms - Drag & Drop Game
            </h4>
            <MatchingGame />
          </div>

          <p>Common behavioral patterns in food addiction include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Consuming more food than physically tolerable</li>
            <li>Eating to the point of feeling ill</li>
            <li>Going to great lengths to acquire specific foods</li>
            <li>Continuing to eat when no longer hungry</li>
            <li>Secretive eating habits and food hoarding</li>
            <li>Significant loss of control over eating habits</li>
          </ul>
        </div>
      ),
    },
    {
      type: "content",
      title: "The Brain's Reward System",
      content: (
        <div className="space-y-4">
          <p>
            A central mechanism in food addiction involves the brain's reward system and the role of neurotransmitters,
            particularly dopamine. Highly palatable foods, which are often rich in fat, sugar, and salt, trigger a
            cascade of chemical reactions in the brain.
          </p>

          <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">How It Works</h4>
            <ol className="list-decimal pl-5 space-y-2 text-gray-900">
              <li>You eat highly palatable foods (high in fat, sugar, salt)</li>
              <li>Brain releases dopamine and serotonin</li>
              <li>You experience feelings of pleasure and satisfaction</li>
              <li>Brain creates strong associations with these foods</li>
              <li>Over time, tolerance develops - you need more to feel the same effect</li>
            </ol>
          </div>

          <p>
            This response in the brain is comparable to that observed with addictive substances, highlighting the
            powerful reinforcing properties of these types of foods. Repeated exposure to these highly rewarding foods
            can lead to neuroadaptations within the brain's reward system.
          </p>

          <p>
            Over time, the brain may adjust its receptors to compensate for the repeated surges of these "feel-good"
            chemicals, resulting in a phenomenon known as tolerance. This cycle of reward and tolerance is a key
            characteristic of addictive behaviors.
          </p>
        </div>
      ),
    },
    {
      type: "quiz",
      title: "Quick Check",
      content: (
        <div>
          <p className="mb-4">Let's check your understanding of food addiction concepts:</p>

          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-medium">
                1. Which neurotransmitter is primarily involved in the brain's reward response to food?
              </h4>
              <RadioGroup
                value={selectedAnswers[1]}
                onValueChange={(value) => setSelectedAnswers({ ...selectedAnswers, 1: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="a" id="q1-a" />
                  <Label htmlFor="q1-a">Serotonin only</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="b" id="q1-b" />
                  <Label htmlFor="q1-b">Dopamine</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="c" id="q1-c" />
                  <Label htmlFor="q1-c">Cortisol</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="d" id="q1-d" />
                  <Label htmlFor="q1-d">Insulin</Label>
                </div>
              </RadioGroup>

              {showFeedback && (
                <div
                  className={`p-3 rounded-md ${selectedAnswers[1] === "b" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}
                >
                  {selectedAnswers[1] === "b" ? (
                    <div className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>
                        Correct! Dopamine is the primary neurotransmitter involved in the brain's reward response to
                        highly palatable foods.
                      </span>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <HelpCircle className="h-5 w-5 text-red-600" />
                      <span>
                        Not quite. Dopamine is the primary neurotransmitter involved in the brain's reward response to
                        food.
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">2. What is tolerance in the context of food addiction?</h4>
              <RadioGroup
                value={selectedAnswers[2]}
                onValueChange={(value) => setSelectedAnswers({ ...selectedAnswers, 2: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="a" id="q2-a" />
                  <Label htmlFor="q2-a">Being able to tolerate any type of food</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="b" id="q2-b" />
                  <Label htmlFor="q2-b">Needing larger amounts of food to achieve the same pleasurable effect</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="c" id="q2-c" />
                  <Label htmlFor="q2-c">Having no food allergies</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="d" id="q2-d" />
                  <Label htmlFor="q2-d">Being patient with your eating habits</Label>
                </div>
              </RadioGroup>

              {showFeedback && (
                <div
                  className={`p-3 rounded-md ${selectedAnswers[2] === "b" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}
                >
                  {selectedAnswers[2] === "b" ? (
                    <div className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>
                        Correct! Tolerance means needing increasingly larger amounts to achieve the same effect.
                      </span>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <HelpCircle className="h-5 w-5 text-red-600" />
                      <span>
                        Not quite. Tolerance means needing increasingly larger amounts to achieve the same effect.
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="mt-6">
            <Button
              onClick={() => setShowFeedback(true)}
              className="w-full bg-rose-600 hover:bg-rose-700"
              disabled={!selectedAnswers[1] || !selectedAnswers[2]}
            >
              Check Answers
            </Button>
          </div>
        </div>
      ),
    },
    {
      type: "fill-in-blank",
      title: "Fill in the Blanks",
      content: (
        <div>
          <p className="mb-4">Complete the sentences by filling in the blanks:</p>

          <div className="space-y-6">
            <FillInBlank
              sentence="Food addiction involves a persistent __________ with food and compulsive eating behaviors."
              answer="preoccupation"
              placeholder="Type your answer"
            />

            <FillInBlank
              sentence="The __________ Food Addiction Scale is a widely used tool to assess addictive-like eating behaviors."
              answer="Yale"
              placeholder="Type your answer"
            />

            <FillInBlank
              sentence="Over time, the brain develops __________, meaning you need more food to achieve the same pleasurable effect."
              answer="tolerance"
              placeholder="Type your answer"
            />
          </div>
        </div>
      ),
    },
    {
      type: "writing",
      title: "Self-Assessment & Reflection",
      content: (
        <div>
          <p className="mb-4">Take a moment to reflect on your own relationship with food:</p>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">
                Do you recognize any of the behavioral patterns of food addiction in yourself? Which ones, and how do
                they show up in your daily life?
              </h4>
              <textarea
                className="w-full border border-gray-300 rounded-md p-3 min-h-[120px]"
                placeholder="Write your reflection here..."
              ></textarea>
            </div>
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-100 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">Daily Challenge</h4>
            <p className="text-amber-700">
              For the next 24 hours, practice mindful awareness of your food thoughts. Notice when you think about food,
              what triggers these thoughts, and how often they occur. Simply observe without judgment - this is the
              first step toward understanding your relationship with food.
            </p>
          </div>
        </div>
      ),
    },
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      setShowFeedback(false)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setShowFeedback(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-50">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-xl font-bold text-gray-800">Day 1: The Nature of Food Addiction</h1>
            </div>
            <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200">
              10 XP
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Game HUD */}
          <div className="mb-6 bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-2">
                  <span className="text-black font-bold text-lg">⭐ {(currentStep + 1) * 50} XP</span>
                </div>
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-full px-3 py-1">
                  <span className="text-black font-bold">Level {Math.floor(currentStep / 2) + 1}</span>
                </div>
              </div>
              <div className="text-white">
                <span className="text-sm opacity-75">Quest Progress</span>
                <div className="text-lg font-bold">
                  {currentStep + 1}/{steps.length}
                </div>
              </div>
            </div>

            {/* Animated Progress Bar */}
            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-purple-200">Quest: Understanding Food Addiction</span>
                <span className="text-sm font-medium text-white">
                  {Math.round(((currentStep + 1) / steps.length) * 100)}%
                </span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-purple-500/50">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full transition-all duration-500 ease-out relative"
                  style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Game Card */}
          <div className="relative">
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute top-20 right-20 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-40"></div>
              <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse opacity-50"></div>
            </div>

            <Card className="border-2 border-purple-500/50 shadow-2xl bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm">
              <CardContent className="p-8">
                {/* Achievement Badge */}
                {currentStep === 0 && (
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-4 animate-pulse">
                      <span className="text-2xl">🧠</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                    {currentStep + 1}
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                    {steps[currentStep].title}
                  </h2>
                </div>

                <div className="text-gray-100 space-y-4">{steps[currentStep].content}</div>

                {/* Step completion indicator */}
                {showFeedback && (
                  <div className="mt-6 flex justify-center">
                    <div className="bg-green-500/20 border border-green-500 rounded-full px-4 py-2 flex items-center gap-2 animate-bounce">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-green-400 font-medium">Quest Step Complete! +50 XP</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Game Controls */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-200"
            >
              ← Previous Quest
            </Button>

            {currentStep === steps.length - 1 ? (
              <Link href="/">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                  🏆 Complete Quest <CheckCircle className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <Button
                onClick={handleNext}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Continue Quest → <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

function VocabCard({ term, definition }) {
  return (
    <div className="bg-white rounded-lg p-3 border border-blue-100 flex justify-between items-start">
      <div>
        <h5 className="font-medium text-gray-900">{term}</h5>
        <p className="text-sm text-gray-600">{definition}</p>
      </div>
      <button className="text-blue-600 hover:text-blue-800">
        <Volume2 className="h-4 w-4" />
      </button>
    </div>
  )
}

function FillInBlank({ sentence, answer, placeholder }) {
  const [userAnswer, setUserAnswer] = useState("")
  const [isChecked, setIsChecked] = useState(false)

  const isCorrect = userAnswer.toLowerCase() === answer.toLowerCase()

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-3 py-2 w-full max-w-xs"
          placeholder={placeholder}
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <span>{sentence.replace("__________", "")}</span>
      </div>

      <div className="flex gap-2">
        <Button onClick={() => setIsChecked(true)} variant="outline" size="sm" disabled={!userAnswer}>
          Check
        </Button>

        {isChecked && (
          <div
            className={`p-2 rounded-md ${isCorrect ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"} flex items-center gap-2`}
          >
            {isCorrect ? (
              <>
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Correct!</span>
              </>
            ) : (
              <>
                <HelpCircle className="h-4 w-4 text-red-600" />
                <span>Not quite. The answer is: {answer}</span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
