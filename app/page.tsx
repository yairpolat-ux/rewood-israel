export default function HomePage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#faf7f2] text-neutral-900">
      {/* Hero */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="mb-3 text-sm tracking-[0.2em] uppercase text-neutral-500">
              ReWood Israel | Created by Yair
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              עץ ישן, חיים חדשים 🌿
            </h1>
            <p className="text-lg md:text-xl leading-8 text-neutral-700 mb-8 max-w-2xl">
              פריטי עץ בעבודת יד מ־100% עץ ממוחזר, בהתאמה אישית מלאה.
              נבנה מתוך סיפור ישראלי אמיתי של משפחה, מילואים, יצירה והתחלה מחדש.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-2xl bg-black px-6 py-3 text-white shadow-lg">
                להזמנה אישית
              </button>
              <button className="rounded-2xl border border-neutral-300 px-6 py-3">
                צפייה בעבודות
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-[url('/wood-placeholder.jpg')] bg-cover bg-center min-h-[420px] shadow-2xl" />
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-20 md:px-16 lg:px-24 bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">הסיפור של יאיר</h2>
          <p className="text-lg leading-9 text-neutral-700">
            אני יאיר. העסק שלי כהנדימן נפגע בעקבות המלחמה ובמהלך שירות ממושך
            במילואים, חזרתי לתחביב שתמיד נתן לי שקט – עבודה עם עץ.
            מה שהתחיל כיצירה לנשמה הפך לדרך להמשיך לפרנס, להחזיק את הבית,
            וליצור פריטים עם משמעות אמיתית. כל מוצר נבנה מ־100% עץ ממוחזר:
            משטחים, ריהוט ישן, עץ בניין וגזמי עצים.
          </p>
        </div>
      </section>

      {/* Why choose */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-10">למה לבחור ReWood?</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              '100% עץ ממוחזר',
              'עבודת יד ישראלית',
              'התאמה אישית מלאה',
              'סגנון כפרי מודרני',
            ].map((item) => (
              <div key={item} className="rounded-3xl bg-white p-6 shadow-md">
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-20 md:px-16 lg:px-24 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-10">עבודות נבחרות</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="overflow-hidden rounded-3xl bg-neutral-100 shadow-md">
                <div className="h-64 bg-neutral-300" />
                <div className="p-4">
                  <h3 className="font-semibold">מוצר מותאם אישית #{item}</h3>
                  <p className="text-sm text-neutral-600 mt-2">
                    נבנה מעץ ממוחזר עם אפשרות להתאמה מלאה.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-6 py-20 text-white md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">יש לכם רעיון לפריט?</h2>
          <p className="text-lg text-neutral-300 mb-8">
            בואו נהפוך אותו ליצירה עם אופי, נשמה וסיפור.
          </p>
          <button className="rounded-2xl bg-white px-8 py-4 text-black font-semibold">
            להזמנה בוואטסאפ
          </button>
        </div>
      </section>
    </main>
  )
}
