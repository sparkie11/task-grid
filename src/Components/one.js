import React, { useState } from "react";
import { sampleData } from "../data/sampleData";
import "./one.css";

const One = () => {
  const [midoriya, Setmidoriya] = useState(false);
  const [eraser, Seteraser] = useState(false);
  const [aizawa, Setaizawa] = useState(null);
  const [listData, setListData] = useState([]);

  //   console.log("sample", sampleData[0].data);

  //   const handleDetails = ({ pass }) => {
  //     // const demo = sampleData.filter((data) =>
  //     //   data.id === id ? data : null
  //     // );
  //     const demo = sampleData.map((data) => data.data);
  //     const test = demo.map((data) => data);
  //     console.log("demo", test);
  //   };
  //   console.log(sampleData);

  const handleId = (item) => {
    console.log(item.id);
    const help = sampleData.filter((i) => (i.id === item.id ? i.title : null));
    // const hero = help.map((r) => (r.id === item.id ? r.title : null));
    const AllMight = item.data.map((terraformers) => terraformers.title);
    // console.log(help, hero, AllMight);
    setListData(AllMight);

    Setaizawa(AllMight);
    //Setaizawa = AllMight.map((toshinori) => toshinori.title);
  };
  return (
    <div className="izuku">
      <button
        onClick={() => Setmidoriya(!midoriya)}
        // onMouseLeave={() => Setmidoriya(!midoriya)}
      >
        Mugiwala ya !
      </button>
      {midoriya && (
        <div>
          <div>
            {sampleData.map((item) => (
              <div>
                <ul>
                  <li key={item.id} onClick={() => handleId(item)}>
                    {item.title}
                  </li>
                </ul>
              </div>

              //  {map((yagi)=>(<ul><li>{yagi}</li></ul>))}
            ))}
          </div>
        </div>
      )}
      {listData.length ? (
        <div>
          {listData.map((data) => (
            <ul>
              <li>{data}</li>
            </ul>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default One;
