import React, { useContext } from "react";
import { MapContext } from "../contexts/MapContext";

const IssueRanking = () => {
  const { setSelectedCity } = useContext(MapContext);

  const mglsekolah = [
    { id: 1, mgl: "Kabupaten Bogor" },
    { id: 2, mgl: "Kabupaten Cirebon" },
    { id: 3, mgl: "Kabupaten Garut" },
    { id: 4, mgl: "Kabupaten Bandung" },
    { id: 5, mgl: "Kabupaten Bekasi" },
  ];

  const ptssekolah = [
    { id: 1, pts: "Kabupaten Bogor" },
    { id: 2, pts: "Kabupaten Garut" },
    { id: 3, pts: "Kabupaten Karawang" },
    { id: 4, pts: "Kota Bekasi" },
    { id: 5, pts: "Kabupaten Bekasi" },
  ];

  const literates = [
    { id: 1, literate: "Kota Cimahi" },
    { id: 2, literate: "Kota Bekasi" },
    { id: 3, literate: "Kota Cirebon" },
    { id: 4, literate: "Kabupaten Pangandaran" },
    { id: 5, literate: "Kota Tasikmalaya" },
  ];

  const handleCityClick = (cityName) => {
    setSelectedCity(cityName);
  };

  return (
    <>
      <div className="h-full row-span-1 text-center text-xl font-bold text-white bg-iris-grey content-center">ISSUE RANKING</div>
      <div className="row-span-7 rounded-lg p-2">
        <div className="grid grid-cols-3 gap-3">
          <div className="grid-rows-6">
            <div className="h-12 row-span-1 text-center text-xl font-bold text-white bg-iris-grey content-center ">Top siswa SD Mengulang</div>
            <div className="row-span-5 mt-3">
              <ul>
                {mglsekolah.map((item) => (
                  <li key={item.id} className="flex justify-between items-center bg-gray-200 hover:bg-gray-300 hover:cursor-pointer p-4 rounded-lg mb-2 text-black" onClick={() => handleCityClick(item.mgl)}>
                    <div className="flex items-center">
                      <span className="text-xl font-bold mr-2">#{item.id}</span>
                      <span>{item.mgl}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid-rows-6">
            <div className="h-12 row-span-1 text-center text-xl font-bold text-white bg-iris-grey content-center ">Top siswa SD Putus Sekolah</div>
            <div className="row-span-5 mt-3">
              <ul>
                {ptssekolah.map((item) => (
                  <li key={item.id} className="flex justify-between items-center bg-gray-200 hover:bg-gray-300 hover:cursor-pointer p-4 rounded-lg mb-2 text-black" onClick={() => handleCityClick(item.pts)}>
                    <div className="flex items-center">
                      <span className="text-xl font-bold mr-2">#{item.id}</span>
                      <span>{item.pts}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid-rows-6">
            <div className="h-12 row-span-1 text-center text-xl font-bold text-white bg-iris-grey content-center ">Top 5 Daerah Literasi Terendah</div>
            <div className="row-span-5 mt-3">
              <ul>
                {literates.map((item) => (
                  <li key={item.id} className="flex justify-between items-center bg-gray-200 hover:bg-gray-300 hover:cursor-pointer p-4 rounded-lg mb-2 text-black" onClick={() => handleCityClick(item.literate)}>
                    <div className="flex items-center">
                      <span className="text-xl font-bold mr-2">#{item.id}</span>
                      <span>{item.literate}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IssueRanking;
