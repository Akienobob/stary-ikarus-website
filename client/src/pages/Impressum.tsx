import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function Impressum() {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title">Impressum</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
        </motion.div>

        <motion.div
          className="prose prose-invert max-w-none"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {language === 'en' ? (
            <>
              {/* German Version */}
              <motion.section variants={itemVariants} className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="text-foreground/80 space-y-2">
                  <p>Lev Marchenko</p>
                  <p>Eiffestraße 125 d</p>
                  <p>20537 Hamburg</p>
                  <p>Deutschland</p>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Kontaktinformationen
                </h2>
                <div className="text-foreground/80 space-y-2">
                  <p>
                    <strong>Telefon:</strong>{' '}
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 30'%3E%3Ctext x='10' y='20' font-family='Arial' font-size='14' fill='%23D4AF37'%3E+49 177 425 2197%3C/text%3E%3C/svg%3E"
                      alt="Telefonnummer"
                      className="inline-block h-6"
                    />
                  </p>
                  <p>
                    <strong>E-Mail:</strong> info@starikarus.de
                  </p>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Haftungsausschluss
                </h2>

                <h3 className="text-xl font-serif font-bold text-foreground mb-3 mt-6">
                  Haftung für Inhalte
                </h3>
                <p className="text-foreground/80 mb-4">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                  und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
                  gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                  Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                  gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                  rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                  Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
                  jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
                  von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>

                <h3 className="text-xl font-serif font-bold text-foreground mb-3 mt-6">
                  Haftung für Links
                </h3>
                <p className="text-foreground/80 mb-4">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                  Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                  wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
                  zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten
                  ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                  Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>

                <h3 className="text-xl font-serif font-bold text-foreground mb-3 mt-6">
                  Urheberrecht
                </h3>
                <p className="text-foreground/80 mb-4">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
                  beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                  Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                  von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>

                <h3 className="text-xl font-serif font-bold text-foreground mb-3 mt-6">
                  Datenschutz
                </h3>
                <p className="text-foreground/80 mb-4">
                  Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf
                  unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden,
                  erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
                  Zustimmung nicht an Dritte weitergegeben.
                </p>
                <p className="text-foreground/80 mb-4">
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
                  Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
                  möglich.
                </p>
                <p className="text-foreground/80">
                  Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung
                  von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich
                  widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der
                  unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
                </p>
              </motion.section>
            </>
          ) : (
            <>
              {/* Russian Version */}
              <motion.section variants={itemVariants} className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Данные согласно § 5 TMG
                </h2>
                <div className="text-foreground/80 space-y-2">
                  <p>Lev Marchenko</p>
                  <p>Eiffestraße 125 d</p>
                  <p>20537 Hamburg</p>
                  <p>Германия</p>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Контактная информация
                </h2>
                <div className="text-foreground/80 space-y-2">
                  <p>
                    <strong>Телефон:</strong>{' '}
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 30'%3E%3Ctext x='10' y='20' font-family='Arial' font-size='14' fill='%23D4AF37'%3E+49 177 425 2197%3C/text%3E%3C/svg%3E"
                      alt="Номер телефона"
                      className="inline-block h-6"
                    />
                  </p>
                  <p>
                    <strong>E-Mail:</strong> info@starikarus.de
                  </p>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Отказ от ответственности
                </h2>

                <h3 className="text-xl font-serif font-bold text-foreground mb-3 mt-6">
                  Ответственность за содержание
                </h3>
                <p className="text-foreground/80 mb-4">
                  Содержание нашего сайта было создано с максимальной тщательностью. Однако мы не можем гарантировать
                  правильность, полноту и актуальность содержания. Как поставщик услуг мы несем ответственность за
                  собственное содержание на этих страницах в соответствии с общим законодательством. Однако в соответствии
                  с §§ 8-10 TMG мы не обязаны контролировать передаваемую или сохраняемую информацию третьих лиц или
                  проводить расследования, указывающие на незаконную деятельность. Обязательства по удалению или блокировке
                  использования информации в соответствии с общим законодательством остаются неизменными. Однако
                  ответственность в этом отношении возникает только с момента получения знания о конкретном нарушении.
                  При обнаружении соответствующих нарушений мы немедленно удалим это содержание.
                </p>

                <h3 className="text-xl font-serif font-bold text-foreground mb-3 mt-6">
                  Ответственность за ссылки
                </h3>
                <p className="text-foreground/80 mb-4">
                  Наше предложение содержит ссылки на внешние веб-сайты третьих лиц, на содержание которых мы не имеем
                  влияния. Поэтому мы не можем гарантировать это содержание. За содержание связанных страниц всегда
                  отвечает соответствующий провайдер или оператор страниц. Связанные страницы были проверены на предмет
                  возможных нарушений прав в момент создания ссылки. Незаконное содержание не было обнаружено на момент
                  создания ссылки. Однако постоянный контроль содержания связанных страниц невозможен без конкретных
                  указаний на нарушение. При обнаружении нарушений мы немедленно удалим такие ссылки.
                </p>

                <h3 className="text-xl font-serif font-bold text-foreground mb-3 mt-6">
                  Авторское право
                </h3>
                <p className="text-foreground/80 mb-4">
                  Содержание и работы, созданные операторами сайта на этих страницах, подпадают под действие немецкого
                  авторского права. Воспроизведение, обработка, распространение и любое другое использование за пределами
                  границ авторского права требуют письменного согласия автора или создателя. Загрузки и копии этой страницы
                  разрешены только для частного, некоммерческого использования. Если содержание на этой странице не было
                  создано оператором, соблюдаются авторские права третьих лиц. В частности, содержание третьих лиц отмечается
                  как таковое. Если вы заметили нарушение авторского права, просим вас сообщить об этом. При обнаружении
                  нарушений мы немедленно удалим такое содержание.
                </p>

                <h3 className="text-xl font-serif font-bold text-foreground mb-3 mt-6">
                  Защита данных
                </h3>
                <p className="text-foreground/80 mb-4">
                  Использование нашего веб-сайта, как правило, возможно без предоставления личных данных. Если личные данные
                  (например, имя, адрес или адреса электронной почты) собираются на наших страницах, это, по возможности,
                  всегда происходит на добровольной основе. Эти данные не передаются третьим лицам без вашего явного согласия.
                </p>
                <p className="text-foreground/80 mb-4">
                  Мы указываем на то, что передача данных в Интернете (например, при общении по электронной почте) может иметь
                  уязвимости безопасности. Полная защита данных от доступа третьих лиц невозможна.
                </p>
                <p className="text-foreground/80">
                  Использование опубликованных в соответствии с требованиями об импрессуме контактных данных третьими лицами
                  для отправки нежелательной рекламы и информационных материалов настоящим явно запрещается. Операторы сайтов
                  явно оставляют за собой право предпринять судебные действия в случае несанкционированной отправки рекламной
                  информации, например спам-писем.
                </p>
              </motion.section>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
