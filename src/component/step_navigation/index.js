export function StepNavigation(props) {
  return (
    <div class="w-full py-6 ">
      <div class="flex justify-between">
        <div className="item flex flex-col items-center gap-2">
          <div
            className={`rounded-full w-10 h-10 shadow-lg flex justify-center items-center ${
              parseInt(props.step) > 0
                ? "bg-green-400 text-white"
                : "bg-white text-black"
            }`}
          >
            1
          </div>
          <h4 className="font-semibold text-sm">Data Diri</h4>
        </div>
        <div
          className={`h-2 rounded-full grow mt-4 ${
            parseInt(props.step) > 1 ? "bg-green-400" : "bg-transparent"
          }`}
        ></div>
        <div className="item flex flex-col items-center gap-2">
          <div
            className={`rounded-full w-10 h-10 shadow-lg flex justify-center items-center ${
              parseInt(props.step) > 1
                ? "bg-green-400 text-white"
                : "bg-white text-black"
            }`}
          >
            2
          </div>
          <h4 className="font-semibold text-sm">Riwayat Pendidikan</h4>
        </div>
        <div
          className={`h-2 rounded-full grow mt-4 ${
            parseInt(props.step) > 2 ? "bg-green-400" : "bg-transparent"
          }`}
        ></div>
        <div className="item flex flex-col items-center gap-2">
          <div
            className={`rounded-full w-10 h-10 shadow-lg flex justify-center items-center ${
              parseInt(props.step) > 2
                ? "bg-green-400 text-white"
                : "bg-white text-black"
            }`}
          >
            3
          </div>
          <h4 className="font-semibold text-sm">Pengalaman Kerja</h4>
        </div>
        <div
          className={`h-2 rounded-full grow mt-4 ${
            parseInt(props.step) > 3 ? "bg-green-400" : "bg-transparent"
          }`}
        ></div>
        <div className="item flex flex-col items-center gap-2">
          <div
            className={`rounded-full w-10 h-10 shadow-lg flex justify-center items-center ${
              parseInt(props.step) > 3
                ? "bg-green-400 text-white"
                : "bg-white text-black"
            }`}
          >
            4
          </div>
          <h4 className="font-semibold text-sm">Keahlian</h4>
        </div>
      </div>
    </div>
  );
}
