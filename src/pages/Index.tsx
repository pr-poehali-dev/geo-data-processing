import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-space-navy via-tech-blue to-space-navy text-white">
      <header className="p-6 border-b border-white/10">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Icon name="Satellite" className="text-cosmic-cyan" size={32} />
            <span className="text-2xl font-heading font-bold">ГЕОГРАММА</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-cosmic-cyan transition-colors">Главная</a>
            <a href="#products" className="hover:text-cosmic-cyan transition-colors">Продукты</a>
            <a href="#about" className="hover:text-cosmic-cyan transition-colors">О нас</a>
            <a href="#partners" className="hover:text-cosmic-cyan transition-colors">Партнеры</a>
            <a href="#press" className="hover:text-cosmic-cyan transition-colors">Пресса</a>
            <a href="#contacts" className="hover:text-cosmic-cyan transition-colors">Контакты</a>
            <Button variant="outline" className="border-cosmic-cyan text-cosmic-cyan hover:bg-cosmic-cyan hover:text-space-navy">
              EN
            </Button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-space-purple/20 text-space-purple border-space-purple">
                    <Icon name="Zap" size={16} className="mr-2" />
                    Автоматическая обработка данных ДЗЗ
                  </Badge>
                  <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
                    Центр компетенций по{' '}
                    <span className="bg-gradient-to-r from-cosmic-cyan to-space-purple bg-clip-text text-transparent">
                      космической съемке
                    </span>
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Разрабатываем программное обеспечение и создаем специализированные 
                    программно-технические комплексы для обработки данных дистанционного 
                    зондирования Земли
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cosmic-cyan hover:bg-cosmic-cyan/90 text-space-navy">
                    <Icon name="Rocket" size={20} className="mr-2" />
                    Наши продукты
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Icon name="Play" size={20} className="mr-2" />
                    Смотреть демо
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cosmic-cyan to-space-purple opacity-20 blur-xl rounded-2xl"></div>
                <img 
                  src="/img/7e529301-4186-4330-93d4-323d245ce359.jpg" 
                  alt="Satellite technology" 
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="py-20 px-6 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold mb-4">Наши решения</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Комплексные решения для автоматической обработки данных дистанционного зондирования
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <Icon name="Settings" className="text-cosmic-cyan mb-4" size={32} />
                  <CardTitle className="text-white">Программное обеспечение</CardTitle>
                  <CardDescription className="text-gray-300">
                    Автоматическая обработка данных дистанционного зондирования Земли
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-cosmic-cyan mr-2" />
                      Автоматическая предобработка
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-cosmic-cyan mr-2" />
                      Алгоритмы обработки
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-cosmic-cyan mr-2" />
                      Интеграция с системами
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <Icon name="Cpu" className="text-space-purple mb-4" size={32} />
                  <CardTitle className="text-white">Программно-технические комплексы</CardTitle>
                  <CardDescription className="text-gray-300">
                    Наземные комплексы обработки и использования космической съемки
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-space-purple mr-2" />
                      Прием данных
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-space-purple mr-2" />
                      Обработка в реальном времени
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-space-purple mr-2" />
                      Архивирование данных
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <Icon name="Database" className="text-cosmic-cyan mb-4" size={32} />
                  <CardTitle className="text-white">Информационные продукты</CardTitle>
                  <CardDescription className="text-gray-300">
                    Продукты и услуги обработки данных космической съемки
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-cosmic-cyan mr-2" />
                      Обработка изображений
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-cosmic-cyan mr-2" />
                      Геоинформационные продукты
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-cosmic-cyan mr-2" />
                      Консультационные услуги
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/img/e980f575-0397-40b3-909e-094b5e1a90b8.jpg" 
                  alt="Space technology visualization" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-heading font-bold">О компании</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  ООО «ГЕОГРАММА» — центр компетенций по автоматической обработке данных 
                  дистанционного зондирования Земли. Мы осуществляем деятельность в области 
                  информационных технологий по ключевым направлениям космической индустрии.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Target" className="text-cosmic-cyan mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-lg">Наземные комплексы</h3>
                      <p className="text-gray-300">
                        Разработка современных комплексов автоматической предобработки 
                        и хранения данных ДЗЗ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Globe" className="text-space-purple mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-lg">Космические системы</h3>
                      <p className="text-gray-300">
                        Работа с данными оптико-электронного и радиолокационного 
                        наблюдения для государственных и частных организаций
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="py-20 px-6 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold mb-4">Партнеры</h2>
              <p className="text-xl text-gray-300">
                Работаем с ведущими организациями космической отрасли
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="bg-white/10 border-white/20 backdrop-blur-sm p-8">
                  <div className="flex items-center justify-center h-20">
                    <Icon name="Building" className="text-cosmic-cyan" size={40} />
                  </div>
                  <p className="text-center mt-4 text-gray-300">Партнер {i}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="press" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold mb-4">Пресса и новости</h2>
              <p className="text-xl text-gray-300">
                Последние новости и достижения компании
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <Badge className="bg-cosmic-cyan/20 text-cosmic-cyan border-cosmic-cyan w-fit">
                      Новости
                    </Badge>
                    <CardTitle className="text-white">
                      Новое решение для обработки данных ДЗЗ
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Компания представила инновационное решение для автоматической 
                      обработки спутниковых данных
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-400">15 января 2024</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 px-6 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold mb-4">Контакты</h2>
              <p className="text-xl text-gray-300">
                Свяжитесь с нами для обсуждения проектов
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <Icon name="MapPin" className="text-cosmic-cyan mx-auto mb-4" size={32} />
                  <CardTitle className="text-white">Адрес</CardTitle>
                  <CardDescription className="text-gray-300">
                    г. Москва, ул. Космическая, д. 1
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <Icon name="Phone" className="text-space-purple mx-auto mb-4" size={32} />
                  <CardTitle className="text-white">Телефон</CardTitle>
                  <CardDescription className="text-gray-300">
                    +7 (495) 123-45-67
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <Icon name="Mail" className="text-cosmic-cyan mx-auto mb-4" size={32} />
                  <CardTitle className="text-white">Email</CardTitle>
                  <CardDescription className="text-gray-300">
                    info@geogramma.ru
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2024 ООО «ГЕОГРАММА». Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;