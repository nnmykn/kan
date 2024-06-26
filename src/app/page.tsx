'use client'

export default function Home() {
  function calculateYearsSince(dateString: string): number {
    const startDate = new Date(dateString);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();

    const startDateThisYear = new Date(currentDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    if (currentDate < startDateThisYear) {
      years--;
    }

    return years;
  }

  const yearsSince = calculateYearsSince("2005-10-11");

  return (
    <main>
      <div className={'w-screen h-screen flex items-center justify-center'}>
        <div className={'max-w-screen m-8 md:max-w-[30vw] md:m-24'}>
          <div className={'mb-4 flex flex-col gap-2'}>
            <h2 className={'font-extrabold text-4xl'}>
              <span className={'text-[#D85309]'}>Kan</span> Ninomiya
              <span className={'ml-2'}>({yearsSince})</span>
            </h2>
          </div>
          <div>
            <p className={'text-xs leading-5 p-4 bg-gray-100 rounded-md'}>
            幼少期からPCを触り始め、小学校低学年よりプログラミングを開始、中学生で初めてWebサービスのリリースを経験。
            <br />
            新規サービス開発を得意としており、マーケティングから実装に至るまで幅広い分野の知見があります。
            <br />
            AIを活用したサービス開発に早期から着手し、2022年10月にLINEで使用可能なAIチャットボット「Lina（現在の友達数は1万人以上）」を開発し、事業譲渡を行ったのち株式会社FP16を共同創業。
          </p>
          </div>
        </div>
      </div>
    </main>
  )
}
