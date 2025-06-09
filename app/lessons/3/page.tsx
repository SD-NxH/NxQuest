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

export default function EmotionalEatingLesson() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showFeedback, setShowFeedback] = useState(false)

  const steps = [
    {
      type: "content",
      title: "Defining Emotional Eating",
      content: (
        <div className="space-y-4">
          <p>
            Emotional eating, also referred to as stress eating or emotional overeating, is defined as the tendency to
            consume food not in response to physical hunger but as a way to cope with or manage emotions. This behavior
            can be triggered by a wide spectrum of emotions, including both positive and negative feelings.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Key Vocabulary
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <VocabCard
                term="Emotional Eating"
                definition="Consuming food in response to emotions rather than physical hunger"
              />
              <VocabCard term="Comfort Food" definition="Foods that provide consolation or a feeling of well-being" />
              <VocabCard
                term="Mindful Eating"
                definition="Paying full attention to the experience of eating and drinking"
              />
              <VocabCard
                term="Stress Hormones"
                definition="Chemicals like cortisol released during stress that can affect appetite"
              />
            </div>
          </div>

          <p>
            While occasional emotional eating is a common human experience, particularly in response to stress or during
            celebrations, it can become problematic when it develops into the primary or habitual way of dealing with
            feelings. When eating is consistently used as an emotional coping mechanism, it can lead to unhealthy cycles
            and may hinder the development of more adaptive ways to manage emotions.
          </p>
        </div>
      ),
    },
    {
      type: "content",
      title: "The Neurobiology of Emotional Eating",
      content: (
        <div className="space-y-4">
          <p>
            The connection between emotions and eating behaviors is rooted in neurobiological processes within the
            brain. Stress and negative emotional states have been shown to exert significant effects on various aspects
            of human behavior, including appetite regulation and the processing of food-related rewards in the brain.
          </p>

          <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">Brain-Food Connection</h4>
            <p className="text-amber-700 mb-2">
              Research suggests that individuals who identify as emotional eaters may exhibit distinct physiological and
              brain responses to stress compared to non-emotional eaters:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-amber-700">
              <li>
                During stress, emotional eaters experience more pronounced activation of the
                hypothalamic-pituitary-adrenal (HPA) axis
              </li>
              <li>This leads to elevated levels of stress hormones like cortisol</li>
              <li>
                They may show reduced activation in brain regions associated with reward processing when anticipating
                food rewards
              </li>
              <li>
                This hypoactivation in reward areas could drive them to seek out more food to normalize reward circuitry
                functioning
              </li>
            </ul>
          </div>

          <p>
            Neurotransmitters such as serotonin and dopamine, which are involved in both mood regulation and the brain's
            reward system, are influenced by both emotional states and food intake. This highlights the intricate
            neurochemical link between feelings and eating behaviors.
          </p>
        </div>
      ),
    },
    {
      type: "content",
      title: "Learned Associations with Food",
      content: (
        <div className="space-y-4">
          <p>
            The emotional connection to food is often a result of learned associations that develop over time,
            particularly through experiences in childhood. For many, food becomes intertwined with feelings of comfort
            and reward through repeated pairings with positive experiences.
          </p>

          <h3 className="font-medium text-lg">How These Associations Form</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Parents or caregivers using food to reward good behavior</li>
            <li>Food being offered to soothe distress or comfort during difficult times</li>
            <li>Special foods associated with celebrations and achievements</li>
            <li>Cultural traditions that center around specific foods for holidays and gatherings</li>
          </ul>

          <p>
            These repeated associations can create powerful and lasting links between specific foods and positive
            emotional states, leading individuals to seek out these foods in adulthood when they are looking for comfort
            or a sense of reward.
          </p>

          <p>
            Beyond individual experiences, cultural norms and societal practices also play a significant role in shaping
            our emotional connections to food. Many cultures associate specific foods with celebrations, holidays, and
            social gatherings, further reinforcing the link between food and positive emotions like joy, belonging, and
            nostalgia.
          </p>
        </div>
      ),
    },
    {
      type: "quiz",
      title: "Quick Check",
      content: (
        <div>
          <p className="mb-4">Let's check your understanding of emotional eating concepts:</p>

          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-medium">1. What is emotional eating?</h4>
              <RadioGroup
                value={selectedAnswers[1]}
                onValueChange={(value) => setSelectedAnswers({ ...selectedAnswers, 1: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="a" id="q1-a" />
                  <Label htmlFor="q1-a">Eating only when you're physically hungry</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="b" id="q1-b" />
                  <Label htmlFor="q1-b">Consuming food in response to emotions rather than physical hunger</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="c" id="q1-c" />
                  <Label htmlFor="q1-c">Following a strict diet plan</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="d" id="q1-d" />
                  <Label htmlFor="q1-d">Eating only healthy foods</Label>
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
                        Correct! Emotional eating is consuming food in response to emotions rather than physical hunger.
                      </span>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <HelpCircle className="h-5 w-5 text-red-600" />
                      <span>
                        Not quite. Emotional eating is consuming food in response to emotions rather than physical
                        hunger.
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">2. Which of the following is NOT a characteristic of emotional hunger?</h4>
              <RadioGroup
                value={selectedAnswers[2]}
                onValueChange={(value) => setSelectedAnswers({ ...selectedAnswers, 2: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="a" id="q2-a" />
                  <Label htmlFor="q2-a">It comes on suddenly</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="b" id="q2-b" />
                  <Label htmlFor="q2-b">It's often for specific comfort foods</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="c" id="q2-c" />
                  <Label htmlFor="q2-c">It develops gradually over time</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="d" id="q2-d" />
                  <Label htmlFor="q2-d">It can persist even after you're physically full</Label>
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
                        Correct! Emotional hunger typically comes on suddenly, while physical hunger develops gradually
                        over time.
                      </span>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <HelpCircle className="h-5 w-5 text-red-600" />
                      <span>
                        Not quite. Emotional hunger typically comes on suddenly, while physical hunger develops
                        gradually over time.
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
      type: "content",
      title: "Emotional vs. Physical Hunger",
      content: (
        <div className="space-y-4">
          <p>
            Recognizing the difference between emotional hunger and physical hunger is a fundamental skill in overcoming
            emotional eating.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-medium text-blue-800 mb-2">Emotional Hunger</h3>
              <ul className="list-disc pl-5 space-y-1 text-blue-700">
                <li>Comes on suddenly and feels urgent</li>
                <li>Craves specific comfort foods</li>
                <li>Not satisfied by fullness; wants more</li>
                <li>Leads to mindless eating</li>
                <li>Triggers feelings of guilt or shame</li>
                <li>Felt more in the mind than the stomach</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-medium text-green-800 mb-2">Physical Hunger</h3>
              <ul className="list-disc pl-5 space-y-1 text-green-700">
                <li>Develops gradually over time</li>
                <li>Open to various food options</li>
                <li>Stops when you feel full</li>
                <li>Involves conscious eating choices</li>
                <li>No guilt associated with eating</li>
                <li>Accompanied by physical sensations (stomach growling)</li>
              </ul>
            </div>
          </div>

          <p>
            Learning to discern these differences is a crucial step towards making more conscious and healthy choices
            about when and why we eat.
          </p>
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
              sentence="Emotional eating is consuming food in response to __________ rather than physical hunger."
              answer="emotions"
              placeholder="Type your answer"
            />

            <FillInBlank
              sentence="During stress, emotional eaters may experience elevated levels of the stress hormone __________."
              answer="cortisol"
              placeholder="Type your answer"
            />

            <FillInBlank
              sentence="Learning to eat __________ can help you become more aware of your body's hunger and fullness cues."
              answer="mindfully"
              placeholder="Type your answer"
            />
          </div>
        </div>
      ),
    },
    {
      type: "content",
      title: "Strategies for Managing Emotional Eating",
      content: (
        <div className="space-y-4">
          <p>
            Developing effective strategies to recognize and address emotional eating is essential for breaking free
            from this pattern.
          </p>

          <h3 className="font-medium text-lg">1. Keep an Emotional Eating Diary</h3>
          <p>Record the following information each time you eat:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>What you ate</li>
            <li>When you ate</li>
            <li>Your mood before eating</li>
            <li>The circumstances surrounding your eating</li>
            <li>How hungry you were (on a scale of 1-10)</li>
            <li>How you felt after eating</li>
          </ul>

          <h3 className="font-medium text-lg">2. Develop Alternative Coping Mechanisms</h3>
          <p>When you identify an emotional trigger, try these alternatives instead of eating:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Physical activity (walking, yoga, dancing)</li>
            <li>Relaxation techniques (deep breathing, meditation)</li>
            <li>Journaling your feelings</li>
            <li>Listening to music</li>
            <li>Spending time in nature</li>
            <li>Connecting with supportive friends or family</li>
          </ul>

          <h3 className="font-medium text-lg">3. Practice Mindful Eating</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Eat without distractions (no TV, phone, or computer)</li>
            <li>Slow down and savor each bite</li>
            <li>Pay attention to the taste, texture, and smell of your food</li>
            <li>Check in with your hunger level throughout the meal</li>
            <li>Stop eating when you feel comfortably full</li>
          </ul>
        </div>
      ),
    },
    {
      type: "writing",
      title: "Reflection",
      content: (
        <div>
          <p className="mb-4">Take a moment to reflect on your own relationship with emotional eating:</p>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">
                What emotions typically trigger you to eat when you're not physically hungry? How do you feel after
                emotional eating episodes?
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
              For the next 24 hours, before eating anything, pause and ask yourself: "Am I physically hungry or
              emotionally hungry right now?" Rate your physical hunger on a scale of 1-10. If you're below a 5, try
              waiting 10 minutes and doing something else before deciding whether to eat.
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
              <h1 className="text-xl font-bold text-gray-800">Day 3: The Emotional Connection to Food</h1>
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
                <span className="text-sm text-purple-200">Quest: The Emotional Connection to Food</span>
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
                      <span className="text-2xl">❤️</span>
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
