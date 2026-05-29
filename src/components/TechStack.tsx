import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const technologies = {
    research: {
      icon: "Search",
      title: "UX-исследования",
      description: "Понимание пользователей и их потребностей",
      skills: [
        { name: "Пользовательские интервью", level: 92 },
        { name: "Юзабилити-тестирование", level: 90 },
        { name: "Конкурентный анализ", level: 88 },
        { name: "Jobs To Be Done", level: 85 },
        { name: "Customer Journey Map", level: 87 },
      ],
    },
    design: {
      icon: "PenTool",
      title: "Проектирование",
      description: "От концепции до готового интерфейса",
      skills: [
        { name: "Wireframing", level: 95 },
        { name: "Прототипирование", level: 92 },
        { name: "UI-дизайн", level: 90 },
        { name: "Адаптивный дизайн", level: 88 },
        { name: "Дизайн-системы", level: 85 },
      ],
    },
    tools: {
      icon: "Figma",
      title: "Инструменты",
      description: "Профессиональный инструментарий дизайнера",
      skills: [
        { name: "Figma", level: 95 },
        { name: "FigJam", level: 90 },
        { name: "Miro", level: 88 },
        { name: "Notion", level: 85 },
        { name: "Jira", level: 80 },
      ],
    },
    product: {
      icon: "LayoutDashboard",
      title: "Продуктовое мышление",
      description: "Баланс между бизнесом и пользователем",
      skills: [
        { name: "Product Discovery", level: 88 },
        { name: "Приоритизация (RICE, ICE)", level: 85 },
        { name: "Метрики и аналитика", level: 82 },
        { name: "A/B тестирование", level: 80 },
        { name: "Roadmap-планирование", level: 83 },
      ],
    },
    communication: {
      icon: "MessageCircle",
      title: "Коммуникация",
      description: "Работа в команде и презентация решений",
      skills: [
        { name: "Презентация дизайна", level: 90 },
        { name: "Работа с разработчиками", level: 88 },
        { name: "Фасилитация воркшопов", level: 85 },
        { name: "Документация", level: 87 },
        { name: "Agile / Scrum", level: 82 },
      ],
    },
    motion: {
      icon: "Sparkles",
      title: "Дополнительно",
      description: "Расширенные компетенции",
      skills: [
        { name: "Motion-дизайн", level: 78 },
        { name: "Accessibility (a11y)", level: 85 },
        { name: "Micro-interactions", level: 80 },
        { name: "Иконографика", level: 82 },
        { name: "Брендинг", level: 75 },
      ],
    },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Навыки
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Чем я владею</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technologies).map(([key, category]) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={scaleUp}
            >
              <Card
                className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedCategory === key ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon name={category.icon} className="h-6 w-6 text-primary" fallback="Star" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedCategory === key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-2"
                          >
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-1.5">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-primary h-1.5 rounded-full"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {selectedCategory !== key && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill.name}
                        </Badge>
                      ))}
                      {category.skills.length > 3 && (
                        <Badge variant="secondary">+{category.skills.length - 3} ещё</Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="mt-12 text-center text-muted-foreground"
        >
          <p className="max-w-2xl mx-auto">
            Сочетаю глубокое понимание пользователей с системным подходом к проектированию —
            чтобы создавать продукты, которые работают для людей и помогают бизнесу расти.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
