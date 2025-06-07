"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, HelpCircle, Volume2 } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function FoodAddictionLesson() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showFeedback, setShowFeedback] = useState(false)

  const steps = [
    {
      type: "content",
      title: "Understanding Food Addiction",
      content: (
        <div className="space-y-4">
          <p>
            Food addiction is characterized by the compulsive consumption of highly palatable food items, often those
            high in sugar, fat, and salt. These foods activate the brain's reward system, leading to a cycle of craving
            and consumption.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Key Vocabulary
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <VocabCard
                term="Food Addiction"
                definition="A behavioral addiction characterized by the compulsive consumption of palatable foods"
              />
              <VocabCard term="Dopamine" definition="A neurotransmitter associated with pleasure and reward" />
              <VocabCard
                term="Hyperpalatable"
                definition="Foods engineered to be extremely tasty, usually high in sugar, fat, and salt"
              />
              <VocabCard
                term="Withdrawal"
                definition="Unpleasant symptoms experienced when reducing intake of addictive substances"
              />
            </div>
          </div>

          <p>Common signs of food addiction include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Persistent preoccupation with food and eating</li>
            <li>Eating more than intended or eating until feeling uncomfortably full</li>
            <li>Continued eating despite negative consequences</li>
            <li>Experiencing withdrawal symptoms when cutting back on certain foods</li>
            <li>Failed attempts to reduce consumption of problematic foods</li>
          </ul>
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
              <h4 className="font-medium">1. Which foods are most commonly associated with food addiction?</h4>
              <RadioGroup
                value={selectedAnswers[1]}
                onValueChange={(value) => setSelectedAnswers({ ...selectedAnswers, 1: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="a" id="q1-a" />
                  <Label htmlFor="q1-a">Vegetables and fruits</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="b" id="q1-b" />
                  <Label htmlFor="q1-b">Foods high in sugar, fat, and salt</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="c" id="q1-c" />
                  <Label htmlFor="q1-c">Whole grains and legumes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="d" id="q1-d" />
                  <Label htmlFor="q1-d">Lean proteins</Label>
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
                        Correct! Foods high in sugar, fat, and salt are most commonly associated with food addiction.
                      </span>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <HelpCircle className="h-5 w-5 text-red-600" />
                      <span>
                        Not quite. Foods high in sugar, fat, and salt are most commonly associated with food addiction.
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">
                2. What neurotransmitter is primarily associated with the reward response in food addiction?
              </h4>
              <RadioGroup
                value={selectedAnswers[2]}
                onValueChange={(value) => setSelectedAnswers({ ...selectedAnswers, 2: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="a" id="q2-a" />
                  <Label htmlFor="q2-a">Melatonin</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="b" id="q2-b" />
                  <Label htmlFor="q2-b">Cortisol</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="c" id="q2-c" />
                  <Label htmlFor="q2-c">Dopamine</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="d" id="q2-d" />
                  <Label htmlFor="q2-d">Insulin</Label>
                </div>
              </RadioGroup>

              {showFeedback && (
                <div
                  className={`p-3 rounded-md ${selectedAnswers[2] === "c" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}
                >
                  {selectedAnswers[2] === "c" ? (
                    <div className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>
                        Correct! Dopamine is the neurotransmitter primarily associated with the reward response in food
                        addiction.
                      </span>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <HelpCircle className="h-5 w-5 text-red-600" />
                      <span>
                        Not quite. Dopamine is the neurotransmitter primarily associated with the reward response in
                        food addiction.
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
              className="w-full bg-blue-600 hover:bg-blue-700"
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
              sentence="Food addiction is characterized by the __________ consumption of highly palatable food items."
              answer="compulsive"
              placeholder="Type your answer"
            />

            <FillInBlank
              sentence="Foods that are engineered to be extremely tasty, usually high in sugar, fat, and salt, are called __________ foods."
              answer="hyperpalatable"
              placeholder="Type your answer"
            />

            <FillInBlank
              sentence="When reducing intake of certain foods, individuals with food addiction may experience __________ symptoms."
              answer="withdrawal"
              placeholder="Type your answer"
            />
          </div>
        </div>
      ),
    },
    {
      type: "writing",
      title: "Reflection",
      content: (
        <div>
          <p className="mb-4">Take a moment to reflect on your relationship with food:</p>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">
                Are there any foods you find difficult to stop eating once you start? What are they and why do you think
                that is?
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
              For the next 24 hours, notice and record any food cravings you experience. Note what triggered the
              craving, how intense it was, and how you responded to it.
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
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/courses/nutrition" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-xl font-bold text-gray-800">Lesson 1: Understanding Food Addiction</h1>
            </div>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Module 4
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">Progress</span>
              <span className="text-sm font-medium">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
            </div>
            <Progress
              value={((currentStep + 1) / steps.length) * 100}
              className="h-2 bg-gray-100"
              indicatorClassName="bg-red-500"
            />
          </div>

          <Card className="border-gray-200 shadow-md">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{steps[currentStep].title}</h2>
              {steps[currentStep].content}
            </CardContent>
          </Card>

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
              Previous
            </Button>

            <Button
              onClick={handleNext}
              className="bg-red-600 hover:bg-red-700"
              disabled={currentStep === steps.length - 1}
            >
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
