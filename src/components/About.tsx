import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Users, Heart } from "lucide-react"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
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
            Обо мне
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Кто я такой</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4">Продуктовый дизайнер</h3>
            <p className="text-muted-foreground mb-6">
              Привет! Меня зовут Сергей, я — продуктовый дизайнер. Создаю понятные и удобные интерфейсы,
              которые помогают решать реальные задачи пользователей и бизнеса.
            </p>
            <p className="text-muted-foreground mb-6">
              В работе опираюсь на принципы ясности, системности и эмпатии. Мне важно понимать контекст,
              цели и поведение пользователя, чтобы находить действительно работающие решения.
            </p>
            <p className="text-muted-foreground">
              Верю, что хороший дизайн — это не про украшения, а про смысл и пользу.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Эмпатия к пользователю</h4>
                      <p className="text-muted-foreground">
                        Изучаю поведение и цели пользователей, чтобы создавать интерфейсы,
                        которые работают на практике, а не только выглядят красиво.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Ясность и системность</h4>
                      <p className="text-muted-foreground">
                        Проектирую системно: от структуры информации до деталей взаимодействия.
                        Каждое решение имеет смысл и обоснование.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Дизайн ради пользы</h4>
                      <p className="text-muted-foreground">
                        Хороший дизайн — это не про украшения, а про смысл.
                        Создаю продукты, которые приносят реальную ценность.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}