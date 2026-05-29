import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, ChevronDown } from "lucide-react"

interface Project {
  id: number
  title: string
  shortDescription: string
  description: string
  image: string
  tags: string[]
  features: string[]
  demoLink: string
  fullDescription: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "Мобильное приложение для банка",
      shortDescription: "Редизайн ключевых сценариев для повышения конверсии.",
      description: "Полный редизайн мобильного банкинга: от исследования до финального UI.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["UX Research", "UI Design", "Figma", "Прототипирование"],
      features: [
        "Проведено 12 глубинных интервью",
        "Выявлены ключевые точки боли в онбординге",
        "Разработана новая информационная архитектура",
        "Создан интерактивный прототип",
        "Конверсия регистрации выросла на 34%",
      ],
      demoLink: "#",
      fullDescription:
        "Проект по редизайну мобильного банковского приложения. Начали с глубинных интервью с пользователями и анализа аналитики — выявили критические проблемы в сценарии онбординга. Пересмотрели информационную архитектуру, упростили навигацию и переработали ключевые экраны. Результат: конверсия регистрации выросла на 34%, а оценка в сторах поднялась с 3.2 до 4.6.",
    },
    {
      id: 2,
      title: "B2B SaaS-платформа",
      shortDescription: "Дизайн-система и новый дашборд для корпоративного клиента.",
      description: "Создание дизайн-системы и переработка аналитического дашборда.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Design System", "Dashboard", "B2B", "Figma"],
      features: [
        "Аудит существующего интерфейса",
        "Построена дизайн-система с 200+ компонентов",
        "Разработан новый дашборд с аналитикой",
        "Сокращено время онбординга новых сотрудников",
        "Снижено количество обращений в поддержку на 40%",
      ],
      demoLink: "#",
      fullDescription:
        "Крупный B2B-клиент пришёл с проблемой: интерфейс платформы был настолько сложным, что новые сотрудники тратили недели на обучение. Провели аудит, выявили 80+ проблем с UX. Создали дизайн-систему с нуля, переработали дашборд и главные рабочие сценарии. Количество обращений в поддержку снизилось на 40%, время онбординга сократилось вдвое.",
    },
    {
      id: 3,
      title: "Маркетплейс услуг",
      shortDescription: "Проектирование сервиса поиска и бронирования с нуля.",
      description: "Полный цикл продуктового дизайна маркетплейса — от концепции до запуска.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Product Design", "Marketplace", "UX Research", "Прототипирование"],
      features: [
        "Custdev с исполнителями и заказчиками",
        "Карта пользовательских сценариев",
        "Проектирование двусторонней платформы",
        "Итеративное прототипирование",
        "Успешный запуск MVP за 3 месяца",
      ],
      demoLink: "#",
      fullDescription:
        "Стартап обратился с идеей маркетплейса бытовых услуг. Провели custdev с обеими сторонами платформы — исполнителями и заказчиками. Выявили ключевые мотивации и барьеры. Спроектировали все сценарии: поиск, бронирование, оплату, отзывы. MVP запустили за 3 месяца, в первый месяц зарегистрировалось 500+ исполнителей.",
    },
    {
      id: 4,
      title: "Образовательная платформа",
      shortDescription: "UX-аудит и редизайн онлайн-школы с 50 000 учеников.",
      description: "Аудит существующей платформы и приоритизированный план улучшений.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["UX Audit", "EdTech", "Аналитика", "A/B тесты"],
      features: [
        "Анализ данных 50 000+ пользователей",
        "Проведение юзабилити-тестирования",
        "Выявлено 60+ UX-проблем",
        "Приоритизация по RICE",
        "Completion rate курсов вырос на 28%",
      ],
      demoLink: "#",
      fullDescription:
        "Онлайн-школа столкнулась с высоким отвалом — только 30% начавших курс доходили до конца. Провели глубокий анализ: изучили данные аналитики, провели юзабилити-тесты, собрали обратную связь. Нашли корневые причины отвала и предложили конкретные решения с приоритизацией. После внедрения completion rate вырос до 58%.",
    },
    {
      id: 5,
      title: "Медицинский сервис",
      shortDescription: "Дизайн приложения для записи к врачу и телемедицины.",
      description: "Проектирование интерфейса для записи к врачу и онлайн-консультаций.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["HealthTech", "Mobile", "Accessibility", "UX Research"],
      features: [
        "Исследование с врачами и пациентами",
        "Проектирование с учётом accessibility",
        "Сценарий экстренной помощи",
        "Интеграция видеоконсультаций",
        "Рейтинг приложения 4.8 в App Store",
      ],
      demoLink: "#",
      fullDescription:
        "Медицинский стартап хотел упростить доступ к врачу — особенно для пожилых пользователей. Провели исследование с пациентами разного возраста и практикующими врачами. Спроектировали интерфейс с упором на accessibility: крупные кнопки, понятные формулировки, минимум шагов до записи. Рейтинг в App Store — 4.8, 70% пользователей старше 45 лет.",
    },
    {
      id: 6,
      title: "Финтех-продукт для инвестиций",
      shortDescription: "Упрощение сложного инвестиционного продукта для новичков.",
      description: "Редизайн инвестиционного приложения для массовой аудитории.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["FinTech", "Simplicity", "Onboarding", "UI Design"],
      features: [
        "Анализ барьеров входа для новичков",
        "Упрощённый онбординг за 3 шага",
        "Понятный интерфейс портфеля",
        "Обучающие подсказки",
        "Рост активации новых пользователей на 55%",
      ],
      demoLink: "#",
      fullDescription:
        "Инвестиционная платформа теряла новых пользователей — сложный интерфейс пугал тех, кто никогда не инвестировал. Исследовали барьеры входа, провели конкурентный анализ. Переработали онбординг, упростили дашборд портфеля, добавили контекстные подсказки. Активация новых пользователей выросла на 55%, отвал на этапе регистрации снизился в 2 раза.",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
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
            Портфолио
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Избранные кейсы</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6"
                      >
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary">{tag}</Badge>
                          ))}
                        </div>
                        <ul className="space-y-1 mb-4">
                          {project.features.map((feature, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-0.5">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedProject(project)
                            }}
                          >
                            Подробнее
                          </Button>
                          {project.demoLink !== "#" && (
                            <Button size="sm" asChild onClick={(e) => e.stopPropagation()}>
                              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Смотреть
                              </a>
                            </Button>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {expandedProject !== project.id && (
                    <div className="p-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <Badge key={i} variant="secondary">{tag}</Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="secondary">+{project.tags.length - 3}</Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.description}</DialogDescription>
              </DialogHeader>
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover rounded-lg"
              />
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div>
                <h4 className="font-semibold mb-2">Результаты:</h4>
                <ul className="space-y-1">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  )
}
