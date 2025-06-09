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

export default function FoodTriggersLesson() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showFeedback, setShowFeedback] = useState(false)

  const steps = [
    {
      type: "content",
      title: "Understanding Food Triggers",
      content: (
        <div className="space-y-4">
          <p>
            Food triggers can be defined as specific internal or external cues that prompt an urge to eat, particularly
            in an unhealthy or compulsive manner. These triggers can elicit strong cravings for specific foods, often
            those high in sugar, fat, or salt.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Key Vocabulary
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <VocabCard
                term="Food Triggers"
                definition="Internal or external cues that prompt an urge to eat in an unhealthy or compulsive manner"
              />
              <VocabCard
                term="Internal Triggers"
                definition="Feelings, thoughts, beliefs, and physiological sensations that prompt eating"
              />
              <VocabCard term="External Triggers" definition="Environmental factors that stimulate the desire to eat" />
              <VocabCard
                term="Emotional Eating"
                definition="Consuming food in response to emotions rather than physical hunger"
              />
            </div>
          </div>

          <h3 className="font-medium text-lg">Types of Food Triggers</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Internal Triggers:</strong> Anxiety, boredom, anger, happiness, frustration, loneliness, stress,
              and cravings
            </li>
            <li>
              <strong>External Triggers:</strong> Sight and smell of food, availability of unhealthy snacks, watching
              television, stressful meetings, social gatherings, food advertising
            </li>
          </ul>

          <p>
            Recognizing the distinction between these internal and external cues is a fundamental step towards
            developing effective strategies for managing and ultimately overcoming food addiction.
          </p>
        </div>
      ),
    },
    {
      type: "content",
      title: "Environmental and Emotional Triggers",
      content: (
        <div className="space-y-4">
          <h3 className="font-medium text-lg">Environmental Triggers</h3>
          <p>
            The environment plays a significant role in triggering unhealthy eating behaviors. Common environmental
            triggers include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Easy availability of highly palatable, calorie-dense foods</li>
            <li>Food industry marketing strategies (appealing packaging, addictive flavors)</li>
            <li>Social events and celebrations centered around food</li>
            <li>Restaurants with large portion sizes and tempting menu options</li>
            <li>Workplace environments with frequent treats and snacks</li>
          </ul>

          <h3 className="font-medium text-lg">Emotional Triggers</h3>
          <p>
            Emotional eating occurs when individuals consume food in response to emotional states rather than physical
            hunger. Common emotional triggers include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Stress:</strong> Using food to calm nerves or reduce tension
            </li>
            <li>
              <strong>Boredom:</strong> Eating as a way to fill time or provide stimulation
            </li>
            <li>
              <strong>Sadness:</strong> Seeking comfort in food during times of grief or disappointment
            </li>
            <li>
              <strong>Anxiety:</strong> Using food to distract from worries or soothe anxious feelings
            </li>
            <li>
              <strong>Loneliness:</strong> Eating to fill an emotional void or provide companionship
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">Important Note</h4>
            <p className="text-amber-700">
              Food can provide a temporary sense of comfort or pleasure by stimulating the release of neurotransmitters
              in the brain. However, this relief is often short-lived and can lead to a cycle of emotional eating where
              individuals repeatedly turn to food to manage their feelings.
            </p>
          </div>
        </div>
      ),
    },
    {
      type: "quiz",
      title: "Quick Check",
      content: (
        <div>
          <p className="mb-4">Let's check your understanding of food triggers:</p>

          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-medium">1. Which of the following is an example of an internal trigger?</h4>
              <RadioGroup
                value={selectedAnswers[1]}
                onValueChange={(value) => setSelectedAnswers({ ...selectedAnswers, 1: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="a" id="q1-a" />
                  <Label htmlFor="q1-a">Food advertisements on TV</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="b" id="q1-b" />
                  <Label htmlFor="q1-b">Feeling anxious or stressed</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="c" id="q1-c" />
                  <Label htmlFor="q1-c">Attending a party with a buffet</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="d" id="q1-d" />
                  <Label htmlFor="q1-d">Walking past a bakery</Label>
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
                        Correct! Feeling anxious or stressed is an internal trigger that comes from within you.
                      </span>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <HelpCircle className="h-5 w-5 text-red-600" />
                      <span>
                        Not quite. Feeling anxious or stressed is an internal trigger that comes from within you.
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">2. Why is it important to identify your personal food triggers?</h4>
              <RadioGroup
                value={selectedAnswers[2]}
                onValueChange={(value) => setSelectedAnswers({ ...selectedAnswers, 2: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="a" id="q2-a" />
                  <Label htmlFor="q2-a">To know which foods taste the best</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="b" id="q2-b" />
                  <Label htmlFor="q2-b">To avoid all restaurants and social gatherings</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="c" id="q2-c" />
                  <Label htmlFor="q2-c">To develop strategies to manage situations that lead to unhealthy eating</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="d" id="q2-d" />
                  <Label htmlFor="q2-d">To blame others for your eating habits</Label>
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
                        Correct! Identifying your triggers helps you develop strategies to manage situations that might
                        lead to unhealthy eating.
                      </span>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <HelpCircle className="h-5 w-5 text-red-600" />
                      <span>
                        Not quite. Identifying your triggers helps you develop strategies to manage situations that
                        might lead to unhealthy eating.
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
              sentence="__________ triggers originate from within the individual and can include feelings, thoughts, and beliefs."
              answer="Internal"
              placeholder="Type your answer"
            />

            <FillInBlank
              sentence="__________ eating occurs when individuals consume food in response to emotional states rather than physical hunger."
              answer="Emotional"
              placeholder="Type your answer"
            />

            <FillInBlank
              sentence="Keeping a detailed __________ is an effective method for identifying personal food triggers."
              answer="food diary"
              placeholder="Type your answer"
            />
          </div>
        </div>
      ),
    },
    {
      type: "content",
      title: "Strategies for Identifying Your Triggers",
      content: (
        <div className="space-y-4">
          <p>
            Identifying your personal food triggers is a crucial step in developing strategies to manage food addiction.
            Here are some effective methods:
          </p>

          <h3 className="font-medium text-lg">1. Keep a Food Diary</h3>
          <p>Track not only what you eat and when, but also:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Where you were</li>
            <li>Who you were with</li>
            <li>What you were doing</li>
            <li>Your mood at the time</li>
            <li>Your hunger level (1-10 scale)</li>
          </ul>
          <p>
            Over time, this record can reveal patterns and help pinpoint specific situations, emotions, or times of day
            that trigger unhealthy eating.
          </p>

          <h3 className="font-medium text-lg">2. Practice Mindful Observation</h3>
          <p>Pay close attention to cravings when they arise:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Notice the physical sensations in your body</li>
            <li>Observe your thoughts without judgment</li>
            <li>Identify the emotions you're experiencing</li>
            <li>Learn to distinguish between physical hunger and emotional hunger</li>
          </ul>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Physical vs. Emotional Hunger</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium">Physical Hunger:</h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Develops gradually</li>
                  <li>Can be satisfied with any food</li>
                  <li>Stops when you're full</li>
                  <li>Doesn't cause guilt</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium">Emotional Hunger:</h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Comes on suddenly</li>
                  <li>Craves specific comfort foods</li>
                  <li>Persists despite fullness</li>
                  <li>Often leads to guilt</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "writing",
      title: "Reflection",
      content: (
        <div>
          <p className="mb-4">Take a moment to reflect on your own food triggers:</p>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">
                What are 3-5 specific situations, emotions, or environments that tend to trigger unhealthy eating for
                you?
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
              Start a food diary today. For the next 24 hours, record everything you eat along with the time, location,
              who you were with, what you were doing, your mood, and your hunger level (1-10). Look for patterns that
              might reveal your personal triggers.
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
              <h1 className="text-xl font-bold text-gray-800">Day 2: Identifying Your Triggers</h1>
            </div>
            <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200">
              15 XP
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 min-h-screen">
        <style dangerouslySetInnerHTML={{ __html: customStyles }} />
        <div className="max-w-4xl mx-auto">
          {/* Game HUD */}
          <div className="mb-6 bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-2">
                  <span className="text-black font-bold text-lg">⭐ {(currentStep + 1) * 50}</span>
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
                <span className="text-sm text-purple-200">Quest: Identifying Your Triggers</span>
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
                      <span className="text-2xl">🎯</span>
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
