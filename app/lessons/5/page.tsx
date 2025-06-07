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

export default function MindfulEatingLesson() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showFeedback, setShowFeedback] = useState(false)

  const steps = [
    {
      type: "content",
      title: "Introduction to Mindful Eating",
      content: (
        <div className="space-y-4">
          <p>
            Mindful eating is a practice that involves bringing full attention to the experience of eating, without
            judgment. It centers on being present in the moment while eating, paying close attention to the taste,
            smell, texture, and visual appearance of the food.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Key Vocabulary
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <VocabCard
                term="Mindful Eating"
                definition="Bringing full attention to the experience of eating, without judgment"
              />
              <VocabCard
                term="Interoceptive Awareness"
                definition="The ability to perceive sensations from inside the body"
              />
              <VocabCard term="Satiety" definition="The feeling of fullness and satisfaction after eating" />
              <VocabCard term="Sensory Experience" definition="The taste, smell, texture, and appearance of food" />
            </div>
          </div>

          <h3 className="font-medium text-lg">Key Principles of Mindful Eating</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Slow down the eating process</li>
            <li>Minimize distractions such as electronic devices or work</li>
            <li>Focus on the sensations of eating</li>
            <li>Become attuned to internal cues of hunger, fullness, and satiety</li>
            <li>Make conscious choices about when and how much to eat</li>
          </ul>

          <p>
            By shifting the focus from automatic or emotionally driven consumption to a more deliberate and sensory-rich
            experience, mindful eating can help cultivate a healthier and more balanced relationship with food.
          </p>
        </div>
      ),
    },
    {
      type: "content",
      title: "Developing Body Awareness",
      content: (
        <div className="space-y-4">
          <p>
            A crucial aspect of mindful eating is developing a heightened awareness of the body's internal signals
            related to hunger and fullness. Learning to recognize the subtle cues of physical hunger and differentiating
            these from emotional hunger or cravings is essential.
          </p>

          <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">Physical Hunger Signals</h4>
            <ul className="list-disc pl-5 space-y-1 text-amber-700">
              <li>Stomach grumbles or growling</li>
              <li>Empty or hollow feeling in the stomach</li>
              <li>Mild lightheadedness or difficulty concentrating</li>
              <li>Low energy or slight weakness</li>
              <li>Develops gradually over time</li>
            </ul>
          </div>

          <p>
            Similarly, paying attention to the body's signals of fullness and satiety, which indicate that enough food
            has been consumed, can help prevent overeating. A helpful technique often recommended in mindful eating
            practices is to stop eating when you feel approximately 80% full, rather than waiting until you are
            completely stuffed.
          </p>

          <div className="bg-green-50 border border-green-100 rounded-lg p-4">
            <h4 className="font-medium text-green-800 mb-2">Fullness and Satiety Signals</h4>
            <ul className="list-disc pl-5 space-y-1 text-green-700">
              <li>Comfortable pressure in your stomach</li>
              <li>Decreased interest in the food you're eating</li>
              <li>Feeling satisfied and content</li>
              <li>Steady energy levels</li>
              <li>No longer thinking about food</li>
            </ul>
          </div>

          <p>
            Enhancing this interoceptive awareness empowers individuals to make eating decisions based on genuine
            physiological needs rather than emotional impulses or external cues, fostering a more intuitive and balanced
            approach to food intake.
          </p>
        </div>
      ),
    },
    {
      type: "quiz",
      title: "Quick Check",
      content: (
        <div>
          <p className="mb-4">Let's check your understanding of mindful eating concepts:</p>

          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-medium">1. What is a key principle of mindful eating?</h4>
              <RadioGroup
                value={selectedAnswers[1]}
                onValueChange={(value) => setSelectedAnswers({ ...selectedAnswers, 1: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="a" id="q1-a" />
                  <Label htmlFor="q1-a">Eating as quickly as possible</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="b" id="q1-b" />
                  <Label htmlFor="q1-b">Multitasking while eating</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="c" id="q1-c" />
                  <Label htmlFor="q1-c">Bringing full attention to the experience of eating</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="d" id="q1-d" />
                  <Label htmlFor="q1-d">Avoiding all carbohydrates</Label>
                </div>
              </RadioGroup>

              {showFeedback && (
                <div
                  className={`p-3 rounded-md ${selectedAnswers[1] === "c" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}
                >
                  {selectedAnswers[1] === "c" ? (
                    <div className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>
                        Correct! Mindful eating involves bringing full attention to the experience of eating, without
                        judgment.
                      </span>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <HelpCircle className="h-5 w-5 text-red-600" />
                      <span>
                        Not quite. Mindful eating involves bringing full attention to the experience of eating, without
                        judgment.
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">2. What is a recommended technique to prevent overeating?</h4>
              <RadioGroup
                value={selectedAnswers[2]}
                onValueChange={(value) => setSelectedAnswers({ ...selectedAnswers, 2: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="a" id="q2-a" />
                  <Label htmlFor="q2-a">Eating until you feel completely stuffed</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="b" id="q2-b" />
                  <Label htmlFor="q2-b">Stopping when you feel approximately 80% full</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="c" id="q2-c" />
                  <Label htmlFor="q2-c">Skipping meals throughout the day</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="d" id="q2-d" />
                  <Label htmlFor="q2-d">Drinking water instead of eating</Label>
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
                        Correct! A helpful technique is to stop eating when you feel approximately 80% full, rather than
                        waiting until you are completely stuffed.
                      </span>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <HelpCircle className="h-5 w-5 text-red-600" />
                      <span>
                        Not quite. A helpful technique is to stop eating when you feel approximately 80% full, rather
                        than waiting until you are completely stuffed.
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
      title: "Distinguishing Between Cravings and True Hunger",
      content: (
        <div className="space-y-4">
          <p>
            Mindful eating practices can significantly aid in distinguishing between cravings and true physical hunger.
            By observing the urge to eat with mindfulness, individuals can learn to notice the specific characteristics
            of a craving without immediately acting upon it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="font-medium text-orange-800 mb-2">Characteristics of Cravings</h3>
              <ul className="list-disc pl-5 space-y-1 text-orange-700">
                <li>Desire for very specific foods</li>
                <li>Often for highly palatable foods (sweet, salty, fatty)</li>
                <li>Comes on suddenly</li>
                <li>Can persist even after eating</li>
                <li>Often triggered by emotions or environmental cues</li>
                <li>May feel urgent and demanding</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-medium text-blue-800 mb-2">Characteristics of True Hunger</h3>
              <ul className="list-disc pl-5 space-y-1 text-blue-700">
                <li>Open to various nutritious foods</li>
                <li>Develops gradually over time</li>
                <li>Accompanied by physical sensations</li>
                <li>Satisfied when you've eaten enough</li>
                <li>Based on physiological need</li>
                <li>Can wait if necessary</li>
              </ul>
            </div>
          </div>

          <p>
            This involves paying attention to the intensity of the urge, how long it lasts, and the thoughts and
            physical sensations that accompany it. A key distinction to make is whether the desire is for a very
            specific food item (which is often indicative of a craving) or if any type of nutritious food would be
            satisfying (which is more likely to be a sign of true hunger).
          </p>

          <p>
            Mindful observation provides a valuable space between the initial urge to eat and the subsequent action,
            allowing for a more conscious and thoughtful response to these impulses.
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
              sentence="Mindful eating involves bringing full __________ to the experience of eating, without judgment."
              answer="attention"
              placeholder="Type your answer"
            />

            <FillInBlank
              sentence="A helpful technique is to stop eating when you feel approximately __________% full."
              answer="80"
              placeholder="Type your answer"
            />

            <FillInBlank
              sentence="A desire for a very specific food item is often indicative of a __________ rather than true hunger."
              answer="craving"
              placeholder="Type your answer"
            />
          </div>
        </div>
      ),
    },
    {
      type: "content",
      title: "Practical Techniques for Mindful Eating",
      content: (
        <div className="space-y-4">
          <p>
            Incorporating mindful eating into daily life involves adopting several practical techniques that can help
            shift your focus from rushed, automatic eating to a more present and conscious engagement with your food.
          </p>

          <h3 className="font-medium text-lg">1. Eat Slowly and Deliberately</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Put down your utensils between bites</li>
            <li>Chew your food thoroughly (aim for 20-30 chews per bite)</li>
            <li>Take small bites and savor each one</li>
            <li>Pause halfway through your meal to assess your hunger level</li>
          </ul>

          <h3 className="font-medium text-lg">2. Eliminate Distractions</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Turn off the television</li>
            <li>Put away your phone</li>
            <li>Avoid eating while working at a computer</li>
            <li>Create a dedicated eating space</li>
          </ul>

          <h3 className="font-medium text-lg">3. Engage Your Senses</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Notice the colors, shapes, and arrangement of your food</li>
            <li>Smell your food before taking the first bite</li>
            <li>Pay attention to textures as you chew</li>
            <li>Identify the different flavors in each bite</li>
          </ul>

          <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
            <h4 className="font-medium text-purple-800 mb-2">The Five-Minute Mindful Eating Exercise</h4>
            <ol className="list-decimal pl-5 space-y-1 text-purple-700">
              <li>Choose a small piece of food (like a raisin, nut, or berry)</li>
              <li>Look at it closely, examining its colors, textures, and shape</li>
              <li>Smell it and notice any aromas</li>
              <li>Place it in your mouth but don't chew yet - notice how it feels</li>
              <li>Slowly begin to chew, paying attention to flavors and textures</li>
              <li>Notice the urge to swallow and the sensations as you swallow</li>
              <li>Follow the sensation as the food moves down to your stomach</li>
            </ol>
          </div>

          <p>
            Taking a few moments before you begin eating to appreciate the food in front of you and perhaps even
            expressing gratitude for it can also contribute to a more mindful eating experience.
          </p>
        </div>
      ),
    },
    {
      type: "writing",
      title: "Reflection",
      content: (
        <div>
          <p className="mb-4">Take a moment to reflect on your own eating habits:</p>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">
                What distractions are typically present during your meals? How might removing these distractions change
                your eating experience?
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
              For your next meal, practice the mindful eating techniques you learned today. Eat without distractions,
              slow down, and pay attention to the sensory experience of your food. Notice how full you feel halfway
              through the meal and stop when you feel about 80% full. Afterward, write down how this experience differed
              from your usual eating habits.
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
              <h1 className="text-xl font-bold text-gray-800">Day 5: Mindful Eating and Body Awareness</h1>
            </div>
            <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200">
              20 XP
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
