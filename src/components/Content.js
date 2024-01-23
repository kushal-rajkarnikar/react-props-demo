import Package from "./Package";
import scoreData from "../data";

// document.getElementById("idname").addEventListener("click" , function(){

// });

// $("#idname").click(function(){

// })
export default function Content() {
  console.log(scoreData[1].name);
  const dataList = scoreData.map(function (scoreInfo) {
    console.log(scoreInfo);
    return <Package name={scoreInfo.name} score={scoreInfo.score} />;
  });
  return (
    <main>
      <div className="row">
        {dataList}
        {/* <Package name="Kushal" score={9} />

        <Package name="Tapesh" score={90} />

        <Package name="Prashun" score={99} /> */}
      </div>
    </main>
  );
}
