import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="p-6 border-b border-gray-200 bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Icon name="Microscope" className="text-blue-600" size={32} />
            <span className="text-2xl font-serif font-bold text-gray-900">ГЕОГРАММА</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-600 transition-colors text-gray-700">Главная</a>
            <a href="#research" className="hover:text-blue-600 transition-colors text-gray-700">Исследования</a>
            <a href="#about" className="hover:text-blue-600 transition-colors text-gray-700">О центре</a>
            <a href="#publications" className="hover:text-blue-600 transition-colors text-gray-700">Публикации</a>
            <a href="#team" className="hover:text-blue-600 transition-colors text-gray-700">Команда</a>
            <a href="#contacts" className="hover:text-blue-600 transition-colors text-gray-700">Контакты</a>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              EN
            </Button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                    <Icon name="GraduationCap" size={16} className="mr-2" />
                    Научно-исследовательский центр
                  </Badge>
                  <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-gray-900">
                    Центр компетенций по{' '}
                    <span className="text-blue-600">
                      дистанционному зондированию Земли
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Проводим фундаментальные и прикладные исследования в области 
                    дистанционного зондирования Земли, разрабатываем инновационные 
                    методы обработки и анализа спутниковых данных
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Icon name="BookOpen" size={20} className="mr-2" />
                    Наши исследования
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    <Icon name="FileText" size={20} className="mr-2" />
                    Публикации
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 opacity-30 blur-xl rounded-2xl"></div>
                <img 
                  src="/img/97b2527b-c4cf-4aa3-84e7-c6fa3e2ea5cf.jpg" 
                  alt="Scientific research laboratory" 
                  className="relative rounded-2xl shadow-lg w-full border border-gray-200"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="research" className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4 text-gray-900">Направления исследований</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Основные научные направления работы центра в области дистанционного зондирования
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardHeader>
                  <Icon name="BarChart3" className="text-blue-600 mb-4" size={32} />
                  <CardTitle className="text-gray-900">Методы обработки данных</CardTitle>
                  <CardDescription className="text-gray-600">
                    Разработка алгоритмов автоматической обработки спутниковых данных
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-blue-600 mr-2" />
                      Радиометрическая калибровка
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-blue-600 mr-2" />
                      Атмосферная коррекция
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-blue-600 mr-2" />
                      Машинное обучение
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-sm">
                <CardHeader>
                  <Icon name="Satellite" className="text-green-600 mb-4" size={32} />
                  <CardTitle className="text-gray-900">Спутниковые системы</CardTitle>
                  <CardDescription className="text-gray-600">
                    Исследование возможностей современных спутниковых систем наблюдения
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-600 mr-2" />
                      Оптические системы
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-600 mr-2" />
                      Радиолокационные системы
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-600 mr-2" />
                      Гиперспектральная съемка
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-sm">
                <CardHeader>
                  <Icon name="Globe" className="text-purple-600 mb-4" size={32} />
                  <CardTitle className="text-gray-900">Экологический мониторинг</CardTitle>
                  <CardDescription className="text-gray-600">
                    Применение методов ДЗЗ для исследования природных процессов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-purple-600 mr-2" />
                      Изменения климата
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-purple-600 mr-2" />
                      Динамика растительности
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-purple-600 mr-2" />
                      Мониторинг водных ресурсов
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/img/e980f575-0397-40b3-909e-094b5e1a90b8.jpg" 
                  alt="Space technology visualization" 
                  className="rounded-2xl shadow-lg border border-gray-200"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-serif font-bold text-gray-900">О научном центре</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Научно-исследовательский центр «ГЕОГРАММА» — ведущая организация в области 
                  фундаментальных и прикладных исследований дистанционного зондирования Земли. 
                  Наша деятельность направлена на развитие методов анализа спутниковых данных 
                  и их применение в решении актуальных научных задач.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Award" className="text-blue-600 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Научные достижения</h3>
                      <p className="text-gray-600">
                        Разработка инновационных алгоритмов обработки и анализа 
                        данных дистанционного зондирования для решения фундаментальных задач
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Users" className="text-green-600 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Международное сотрудничество</h3>
                      <p className="text-gray-600">
                        Участие в международных научных проектах и программах 
                        исследования Земли из космоса, обмен знаниями с ведущими центрами
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="publications" className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4 text-gray-900">Научные публикации</h2>
              <p className="text-xl text-gray-600">
                Результаты исследований в ведущих научных журналах
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="bg-white border-gray-200 shadow-sm p-8">
                  <div className="flex items-center justify-center h-20">
                    <Icon name="FileText" className="text-blue-600" size={40} />
                  </div>
                  <p className="text-center mt-4 text-gray-600">Публикация {i}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4 text-gray-900">Научная команда</h2>
              <p className="text-xl text-gray-600">
                Ведущие специалисты в области дистанционного зондирования
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-white border-gray-200 shadow-sm">
                  <CardHeader>
                    <Badge className="bg-blue-50 text-blue-700 border-blue-200 w-fit">
                      Исследователь
                    </Badge>
                    <CardTitle className="text-gray-900">
                      Доктор наук, ведущий специалист по ДЗЗ
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Автор более 50 научных работ в области обработки 
                      и анализа данных дистанционного зондирования
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">15+ лет опыта</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4 text-gray-900">Контакты</h2>
              <p className="text-xl text-gray-600">
                Свяжитесь с нами для научного сотрудничества
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardHeader className="text-center">
                  <Icon name="MapPin" className="text-blue-600 mx-auto mb-4" size={32} />
                  <CardTitle className="text-gray-900">Адрес</CardTitle>
                  <CardDescription className="text-gray-600">
                    г. Москва, ул. Академическая, д. 15
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardHeader className="text-center">
                  <Icon name="Phone" className="text-green-600 mx-auto mb-4" size={32} />
                  <CardTitle className="text-gray-900">Телефон</CardTitle>
                  <CardDescription className="text-gray-600">
                    +7 (495) 123-45-67
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardHeader className="text-center">
                  <Icon name="Mail" className="text-purple-600 mx-auto mb-4" size={32} />
                  <CardTitle className="text-gray-900">Email</CardTitle>
                  <CardDescription className="text-gray-600">
                    research@geogramma.ru
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>© 2024 НИЦ «ГЕОГРАММА». Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;