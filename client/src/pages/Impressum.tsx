import { useEffect } from 'react';

export default function Impressum() {
  useEffect(() => {
    // Render phone and email links
    const phoneDigits = [4, 9, 1, 7, 7, 4, 2, 5, 2, 1, 9, 7];
    const rawNumber = '+' + phoneDigits.join('');

    const formatted =
      '+' +
      phoneDigits[0] +
      phoneDigits[1] +
      ' ' +
      phoneDigits.slice(2, 5).join('') +
      ' ' +
      phoneDigits.slice(5, 8).join('') +
      ' ' +
      phoneDigits.slice(8).join('');

    const phoneLink = document.getElementById('phoneLink') as HTMLAnchorElement;
    if (phoneLink) {
      phoneLink.textContent = formatted;
      phoneLink.href = 'tel:' + rawNumber;
      phoneLink.setAttribute('aria-label', 'Telefonnummer ' + formatted);
    }

    // Email
    const user = ['i', 'n', 'f', 'o'].join('');
    const domainParts = ['star', 'ikarus'];
    const tld = ['d', 'e'].join('');

    const email = user + String.fromCharCode(64) + domainParts.join('') + '.' + tld;

    const emailLink = document.getElementById('emailLink') as HTMLAnchorElement;
    if (emailLink) {
      emailLink.textContent = email;
      emailLink.href = 'mailto:' + email;
      emailLink.setAttribute('aria-label', 'E-Mail-Adresse ' + email);
    }
  }, []);

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="section-title text-4xl md:text-5xl mb-8">Impressum</h1>

        <section className="mb-8">
          <h2 className="section-title text-2xl md:text-3xl mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="text-foreground/80 leading-relaxed">
            Betreiber dieser Website:<br />
            <strong>Lev Marchenko</strong>
            <br />
            (Musikgruppe „Stary Ikarus")
            <br />
            Eiffestraße&nbsp;125&nbsp;d
            <br />
            20537&nbsp;Hamburg
            <br />
            Deutschland
          </p>
        </section>

        <section className="mb-8">
          <h2 className="section-title text-2xl md:text-3xl mb-4">Kontakt</h2>
          <p className="text-foreground/80 leading-relaxed">
            Telefon: <a id="phoneLink" rel="nofollow" className="text-accent hover:underline" />
            <br />
            E-Mail: <a id="emailLink" rel="nofollow" className="text-accent hover:underline" />
          </p>
        </section>

        <section className="mb-8">
          <h2 className="section-title text-2xl md:text-3xl mb-4">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p className="text-foreground/80 leading-relaxed">
            Lev Marchenko
            <br />
            Eiffestraße&nbsp;125&nbsp;d
            <br />
            20537&nbsp;Hamburg
          </p>
        </section>

        <section className="mb-8">
          <h2 className="section-title text-2xl md:text-3xl mb-4">Haftung für Inhalte</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
            bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
            konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="section-title text-2xl md:text-3xl mb-4">Haftung für Links</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
            Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="section-title text-2xl md:text-3xl mb-4">Urheberrecht</h2>
          <p className="text-foreground/80 leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </div>
    </div>
  );
}
