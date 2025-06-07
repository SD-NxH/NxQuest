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
            <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Key Vocabulary
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <VocabCard
                term="Food Addiction"
                definition="A persistent preoccupation with food and compulsive eating behaviors"
              />
              <VocabCard
                term="YFAS"
                definition="Yale Food Addiction Scale - a tool to assess addictive-like eating behaviors"
              />
              <VocabCard
                term="Dopamine"
                definition="A neurotransmitter associated with pleasure and reward in the brain"
              />
              <VocabCard term="Tolerance" definition="Needing increasingly larger amounts to achieve the same effect" />
            </div>
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
            <ol className="list-decimal pl-5 space-y-2">
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
              indicatorClassName="bg-rose-500"
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

            {currentStep === steps.length - 1 ? (
              <Link href="/">
                <Button className="bg-rose-600 hover:bg-rose-700">
                  Complete Lesson <CheckCircle className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Button onClick={handleNext} className="bg-rose-600 hover:bg-rose-700">
                Next <ArrowRight className="ml-2 h-4 w-4" />
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
