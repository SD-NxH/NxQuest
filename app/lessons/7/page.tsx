"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, HelpCircle, Volume2, Heart, Shield } from "lucide-react"
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

export default function SelfCompassionLesson() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showFeedback, setShowFeedback] = useState(false)

  const steps = [
    {
      type: "content",
      title: "The Importance of Self-Compassion in Addressing Food Addiction",
      content: (
        <div className="space-y-4">
          <p>
            Self-compassion, which involves treating oneself with kindness, understanding, and acceptance, especially
            during times of struggle or perceived failure, is an essential tool in addressing food addiction.
            Individuals struggling with food addiction often experience intense feelings of shame and self-criticism
            related to their eating behaviors and perceived lack of control.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Key Vocabulary
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <VocabCard
                term="Self-Compassion"
                definition="Treating oneself with kindness, understanding, and acceptance during difficult times"
              />
              <VocabCard
                term="Self-Criticism"
                definition="Harsh, judgmental thoughts and attitudes directed toward oneself"
              />
              <VocabCard
                term="Self-Forgiveness"
                definition="The ability to let go of guilt and shame after making mistakes"
              />
              <VocabCard
                term="Resilience"
                definition="The ability to bounce back from setbacks and continue moving forward"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-medium text-red-800 mb-2 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Self-Criticism Patterns
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-red-700">
                <li>"I have no willpower"</li>
                <li>"I'm a failure"</li>
                <li>"I'll never change"</li>
                <li>"I'm weak and pathetic"</li>
                <li>"I should be able to control this"</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-medium text-green-800 mb-2 flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Self-Compassionate Responses
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-green-700">
                <li>"This is a difficult struggle"</li>
                <li>"I'm learning and growing"</li>
                <li>"Change takes time and patience"</li>
                <li>"I deserve kindness and understanding"</li>
                <li>"I'm doing the best I can right now"</li>
              </ul>
            </div>
          </div>

          <p>
            Cultivating self-compassion can help counteract these negative self-judgments, fostering a more supportive
            inner dialogue that promotes resilience and motivation for positive change.
          </p>
        </div>
      ),
    },
    {
      type: "content",
      title: "The Three Components of Self-Compassion",
      content: (
        <div className="space-y-4">
          <p>
            According to researcher Dr. Kristin Neff, self-compassion consists of three main components that work
            together to create a healthier relationship with yourself during difficult times.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <h3 className="font-medium text-blue-800 mb-2">1. Self-Kindness</h3>
              <p className="text-blue-700 text-sm mb-2">
                Being warm and understanding toward yourself when you suffer, fail, or feel inadequate.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-blue-700 text-sm">
                <li>Speak to yourself like a good friend</li>
                <li>Offer yourself comfort during pain</li>
                <li>Avoid harsh self-judgment</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
              <h3 className="font-medium text-purple-800 mb-2">2. Common Humanity</h3>
              <p className="text-purple-700 text-sm mb-2">
                Recognizing that suffering and personal inadequacy are part of the shared human experience.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-purple-700 text-sm">
                <li>You're not alone in your struggles</li>
                <li>Everyone makes mistakes</li>
                <li>Imperfection is human</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-lg p-4">
              <h3 className="font-medium text-green-800 mb-2">3. Mindfulness</h3>
              <p className="text-green-700 text-sm mb-2">
                Holding your thoughts and feelings in balanced awareness rather than over-identifying with them.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-green-700 text-sm">
                <li>Observe thoughts without judgment</li>
                <li>Don't suppress or exaggerate feelings</li>
                <li>Stay present with your experience</li>
              </ul>
            </div>
          </div>

          <div className="bg-pink-50 border border-pink-100 rounded-lg p-4">
            <h4 className="font-medium text-pink-800 mb-2">Self-Compassion in Action</h4>
            <p className="text-pink-700">
              When you experience a setback with food, instead of thinking "I'm such a failure," try: "This is a moment
              of struggle (mindfulness). Many people face challenges with food (common humanity). May I be kind to
              myself in this moment (self-kindness)."
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
          <p className="mb-4">Let's check your understanding of self-compassion concepts:</p>

          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-medium">1. What is self-compassion?</h4>
              <RadioGroup
                value={selectedAnswers[1]}
                onValueChange={(value) => setSelectedAnswers({ ...selectedAnswers, 1: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="a" id="q1-a" />
                  <Label htmlFor="q1-a">Making excuses for your behavior</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="b" id="q1-b" />
                  <Label htmlFor="q1-b">Treating yourself with kindness, understanding, and acceptance</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="c" id="q1-c" />
                  <Label htmlFor="q1-c">Ignoring your problems</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="d" id="q1-d" />
                  <Label htmlFor="q1-d">Being overly critical of yourself</Label>
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
                        Correct! Self-compassion involves treating oneself with kindness, understanding, and acceptance,
                        especially during difficult times.
                      </span>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <HelpCircle className="h-5 w-5 text-red-600" />
                      <span>
                        Not quite. Self-compassion involves treating oneself with kindness, understanding, and
                        acceptance, especially during difficult times.
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">
                2. Which of the following is NOT one of the three components of self-compassion?
              </h4>
              <RadioGroup
                value={selectedAnswers[2]}
                onValueChange={(value) => setSelectedAnswers({ ...selectedAnswers, 2: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="a" id="q2-a" />
                  <Label htmlFor="q2-a">Self-kindness</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="b" id="q2-b" />
                  <Label htmlFor="q2-b">Common humanity</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="c" id="q2-c" />
                  <Label htmlFor="q2-c">Self-punishment</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="d" id="q2-d" />
                  <Label htmlFor="q2-d">Mindfulness</Label>
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
                        Correct! Self-punishment is not a component of self-compassion. The three components are
                        self-kindness, common humanity, and mindfulness.
                      </span>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <HelpCircle className="h-5 w-5 text-red-600" />
                      <span>
                        Not quite. Self-punishment is not a component of self-compassion. The three components are
                        self-kindness, common humanity, and mindfulness.
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
      title: "Challenging Self-Criticism and Shame",
      content: (
        <div className="space-y-4">
          <p>
            A key step in developing self-compassion is to recognize and actively challenge the patterns of
            self-criticism and shame that often accompany struggles with eating. Understanding that food addiction has
            neurobiological and environmental components, rather than being solely a matter of willpower, can help
            reduce self-blame.
          </p>

          <h3 className="font-medium text-lg">Understanding the Science</h3>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Food Addiction is Complex</h4>
            <ul className="list-disc pl-5 space-y-1 text-blue-700">
              <li>
                <strong>Neurobiological factors:</strong> Changes in brain chemistry and reward pathways
              </li>
              <li>
                <strong>Genetic predisposition:</strong> Some people are more vulnerable to addictive behaviors
              </li>
              <li>
                <strong>Environmental influences:</strong> Food industry marketing, stress, trauma, social factors
              </li>
              <li>
                <strong>Psychological factors:</strong> Emotional regulation, coping mechanisms, mental health
              </li>
            </ul>
          </div>

          <h3 className="font-medium text-lg">Identifying Negative Self-Talk</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-100 rounded-lg p-4">
              <h4 className="font-medium text-red-800 mb-2">Common Self-Critical Thoughts</h4>
              <ul className="list-disc pl-5 space-y-1 text-red-700 text-sm">
                <li>"I'm so weak and pathetic"</li>
                <li>"I have no self-control"</li>
                <li>"I'm disgusting"</li>
                <li>"I'll never be able to change"</li>
                <li>"Everyone else can do this, why can't I?"</li>
                <li>"I'm a complete failure"</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-lg p-4">
              <h4 className="font-medium text-green-800 mb-2">Compassionate Reframes</h4>
              <ul className="list-disc pl-5 space-y-1 text-green-700 text-sm">
                <li>"I'm facing a real challenge that many people struggle with"</li>
                <li>"I'm learning new skills and it takes time"</li>
                <li>"I deserve love and respect regardless of my eating"</li>
                <li>"Change is possible with patience and practice"</li>
                <li>"Everyone's journey is different"</li>
                <li>"I'm taking steps toward healing"</li>
              </ul>
            </div>
          </div>

          <h3 className="font-medium text-lg">The Shame Spiral</h3>
          <div className="bg-orange-50 border border-orange-100 rounded-lg p-4">
            <h4 className="font-medium text-orange-800 mb-2">Breaking the Cycle</h4>
            <div className="space-y-2 text-orange-700">
              <p>
                <strong>1. Trigger Event:</strong> Eating something you didn't plan to eat
              </p>
              <p>
                <strong>2. Shame Response:</strong> "I'm terrible, I have no willpower"
              </p>
              <p>
                <strong>3. More Eating:</strong> "I've already ruined it, might as well keep going"
              </p>
              <p>
                <strong>4. Increased Shame:</strong> Feeling worse and more out of control
              </p>
              <p className="font-medium">
                <strong>Break the cycle with self-compassion:</strong> "This is hard, I'm human, I can start fresh right
                now"
              </p>
            </div>
          </div>

          <p>
            By identifying negative self-talk and consciously replacing it with more understanding and encouraging
            self-statements, individuals can begin to break free from the damaging cycle of shame and compulsive eating.
          </p>
        </div>
      ),
    },
    {
      type: "content",
      title: "Practicing Self-Forgiveness for Setbacks",
      content: (
        <div className="space-y-4">
          <p>
            In the journey of recovery from food addiction, setbacks and mistakes are often inevitable. Practicing
            self-forgiveness for these instances is crucial for moving forward without getting bogged down by feelings
            of guilt or failure.
          </p>

          <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">Why Setbacks Happen</h4>
            <ul className="list-disc pl-5 space-y-1 text-amber-700">
              <li>Recovery is not a linear process</li>
              <li>Old habits and neural pathways take time to change</li>
              <li>Stress and life challenges can trigger old patterns</li>
              <li>Learning new skills requires practice and patience</li>
              <li>Perfectionism is unrealistic and counterproductive</li>
            </ul>
          </div>

          <h3 className="font-medium text-lg">Steps to Self-Forgiveness</h3>
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <h4 className="font-medium text-blue-800 mb-2">1. Acknowledge What Happened</h4>
              <p className="text-blue-700">
                Don't minimize or deny the setback. Acknowledge it honestly without judgment: "I ate more than I planned
                and I'm feeling disappointed."
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
              <h4 className="font-medium text-purple-800 mb-2">2. Accept Your Humanity</h4>
              <p className="text-purple-700">
                Remember that making mistakes is part of being human. You're not perfect, and that's okay. Everyone
                learning new skills experiences setbacks.
              </p>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-lg p-4">
              <h4 className="font-medium text-green-800 mb-2">3. Learn from the Experience</h4>
              <p className="text-green-700">
                Ask yourself: What triggered this? What can I learn? How can I handle this situation differently next
                time? View it as valuable information, not failure.
              </p>
            </div>

            <div className="bg-pink-50 border border-pink-100 rounded-lg p-4">
              <h4 className="font-medium text-pink-800 mb-2">4. Recommit to Your Goals</h4>
              <p className="text-pink-700">
                Make a conscious choice to continue your journey. One setback doesn't erase all your progress. You can
                start fresh in the very next moment.
              </p>
            </div>
          </div>

          <p>
            Instead of viewing these slips as complete derailments, they can be reframed as learning opportunities that
            provide valuable insights into triggers and challenges. Adopting a more compassionate perspective towards
            oneself during these times helps to maintain momentum and prevents setbacks from leading to a complete
            abandonment of recovery efforts.
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
              sentence="Self-compassion involves treating oneself with __________, understanding, and acceptance during difficult times."
              answer="kindness"
              placeholder="Type your answer"
            />

            <FillInBlank
              sentence="Understanding that food addiction has neurobiological and environmental components can help reduce __________."
              answer="self-blame"
              placeholder="Type your answer"
            />

            <FillInBlank
              sentence="Setbacks can be reframed as __________ opportunities that provide valuable insights into triggers and challenges."
              answer="learning"
              placeholder="Type your answer"
            />
          </div>
        </div>
      ),
    },
    {
      type: "content",
      title: "Cultivating a Positive and Accepting Self-Image",
      content: (
        <div className="space-y-4">
          <p>
            Ultimately, fostering a positive and accepting self-image is vital for long-term well-being and sustained
            recovery from food addiction. This involves learning to value yourself beyond your body weight or eating
            habits.
          </p>

          <h3 className="font-medium text-lg">Expanding Your Self-Worth</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <h4 className="font-medium text-blue-800 mb-2">Personal Strengths</h4>
              <ul className="list-disc pl-5 space-y-1 text-blue-700 text-sm">
                <li>Your unique talents and abilities</li>
                <li>Skills you've developed</li>
                <li>Challenges you've overcome</li>
                <li>Ways you help others</li>
                <li>Your resilience and courage</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-lg p-4">
              <h4 className="font-medium text-green-800 mb-2">Core Values</h4>
              <ul className="list-disc pl-5 space-y-1 text-green-700 text-sm">
                <li>What matters most to you</li>
                <li>Your moral principles</li>
                <li>How you treat others</li>
                <li>Your integrity and honesty</li>
                <li>Your commitment to growth</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
              <h4 className="font-medium text-purple-800 mb-2">Accomplishments</h4>
              <ul className="list-disc pl-5 space-y-1 text-purple-700 text-sm">
                <li>Goals you've achieved</li>
                <li>Relationships you've built</li>
                <li>Knowledge you've gained</li>
                <li>Positive impact you've made</li>
                <li>Progress in recovery</li>
              </ul>
            </div>
          </div>

          <h3 className="font-medium text-lg">Daily Self-Compassion Practices</h3>
          <div className="bg-pink-50 border border-pink-100 rounded-lg p-4">
            <h4 className="font-medium text-pink-800 mb-2">Simple Daily Practices</h4>
            <ul className="list-disc pl-5 space-y-1 text-pink-700">
              <li>
                <strong>Morning affirmation:</strong> "I am worthy of love and kindness, especially from myself"
              </li>
              <li>
                <strong>Self-compassion break:</strong> When struggling, place hand on heart and offer yourself comfort
              </li>
              <li>
                <strong>Gratitude for your body:</strong> Thank your body for what it does for you each day
              </li>
              <li>
                <strong>Evening reflection:</strong> Acknowledge one thing you did well today
              </li>
              <li>
                <strong>Loving-kindness meditation:</strong> Send yourself the same love you'd send a dear friend
              </li>
            </ul>
          </div>

          <h3 className="font-medium text-lg">Building Self-Esteem</h3>
          <div className="bg-teal-50 border border-teal-100 rounded-lg p-4">
            <h4 className="font-medium text-teal-800 mb-2">Strategies for Lasting Change</h4>
            <ul className="list-disc pl-5 space-y-1 text-teal-700">
              <li>Keep a daily accomplishments journal, no matter how small</li>
              <li>Celebrate progress, not just perfection</li>
              <li>Surround yourself with supportive, positive people</li>
              <li>Practice activities that make you feel competent and capable</li>
              <li>Challenge negative thoughts with evidence-based thinking</li>
              <li>Set realistic, achievable goals that build confidence</li>
            </ul>
          </div>

          <p>
            Identifying and focusing on your personal strengths, values, and accomplishments can help boost self-esteem
            and create a more positive overall sense of self. A positive self-image provides a strong foundation for
            making healthy choices and navigating the challenges of maintaining a balanced relationship with food.
          </p>
        </div>
      ),
    },
    {
      type: "writing",
      title: "Reflection",
      content: (
        <div>
          <p className="mb-4">Take a moment to practice self-compassion and reflection:</p>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">
                Write yourself a compassionate letter as if you were writing to a dear friend who was struggling with
                the same challenges you face. What would you say to offer comfort, understanding, and encouragement?
              </h4>
              <textarea
                className="w-full border border-gray-300 rounded-md p-3 min-h-[120px]"
                placeholder="Dear [Your name], I want you to know that..."
              ></textarea>
            </div>

            <div>
              <h4 className="font-medium mb-2">
                List three personal strengths, values, or accomplishments that you're proud of (that have nothing to do
                with food or weight):
              </h4>
              <textarea
                className="w-full border border-gray-300 rounded-md p-3 min-h-[80px]"
                placeholder="1. 
2. 
3."
              ></textarea>
            </div>
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-100 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">Daily Challenge</h4>
            <p className="text-amber-700">
              For the next 24 hours, practice the "self-compassion break" whenever you notice self-critical thoughts.
              Place your hand on your heart, take a deep breath, and say: "This is a moment of struggle. Struggle is
              part of life. May I be kind to myself in this moment." Notice how this feels different from your usual
              self-talk.
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
              <h1 className="text-xl font-bold text-gray-800">Day 7: Self-Compassion and Forgiveness</h1>
            </div>
            <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200">
              25 XP
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
                <span className="text-sm text-purple-200">Quest: Self-Compassion and Forgiveness</span>
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
                      <span className="text-2xl">💝</span>
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
