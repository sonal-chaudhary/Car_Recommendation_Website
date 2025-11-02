import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "../styles/Sales.css";

// Import JSON data
import hyundaiData from "../data/hyundai.json";
import renaultData from "../data/Renault.json";
import mahindraData from "../data/mahindra.json";
import kiaData from "../data/KIA.json";
import toyotaData from "../data/Toyota.json";
import hondaData from "../data/Honda.json";
import skodaData from "../data/Skoda.json";
import tataData from "../data/TATA.json";
import audiData from "../data/Audi.json"; // ✅ replaced volkswagen

// Chart defaults
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const Sales = () => {
  const hyundaiSheet1 = hyundaiData?.Sheet1 || [];
  const renaultSheet1 = renaultData?.Sheet1 || [];
  const mahindraSheet1 = mahindraData?.Sheet1 || [];
  const kiaSheet1 = kiaData?.Sheet1 || [];
  const toyotaSheet1 = toyotaData?.Sheet1 || [];
  const audiSheet1 = audiData?.Sheet1 || []; // ✅ replaced volkswagen
  const hondaSheet1 = hondaData?.Sheet1 || [];
  const skodaSheet1 = skodaData?.Sheet1 || [];
  const tataSheet1 = tataData?.Sheet1 || [];

  const randomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <div className="App">
      {hyundaiSheet1.length > 0 && (
        <div className="dataCard hyundaiSales">
          <Bar
            className="barChart"
            data={{
              labels: Object.keys(hyundaiSheet1[0]).filter(
                (key) => key !== "Model Name"
              ),
              datasets: hyundaiSheet1.map((model) => ({
                label: model["Model Name"],
                data: Object.values(model).filter(
                  (value) => typeof value === "number"
                ),
                backgroundColor: randomColor(),
              })),
            }}
            options={{
              plugins: { title: { text: "Hyundai Monthly Sales" } },
            }}
          />
        </div>
      )}

      {renaultSheet1.length > 0 && (
        <div className="dataCard renaultSales">
          <Bar
            className="barChart"
            data={{
              labels: Object.keys(renaultSheet1[0]).filter(
                (key) => key !== "Model Name"
              ),
              datasets: renaultSheet1.map((model) => ({
                label: model["Model Name"],
                data: Object.values(model).filter(
                  (value) => typeof value === "number"
                ),
                backgroundColor: randomColor(),
              })),
            }}
            options={{
              plugins: { title: { text: "Renault Monthly Sales" } },
            }}
          />
        </div>
      )}

      {mahindraSheet1.length > 0 && (
        <div className="dataCard mahindraSales">
          <Bar
            className="barChart"
            data={{
              labels: Object.keys(mahindraSheet1[0]).filter(
                (key) => key !== "Model Name"
              ),
              datasets: mahindraSheet1.map((model) => ({
                label: model["Model Name"],
                data: Object.values(model).filter(
                  (value) => typeof value === "number"
                ),
                backgroundColor: randomColor(),
              })),
            }}
            options={{
              plugins: { title: { text: "Mahindra Monthly Sales" } },
            }}
          />
        </div>
      )}

      <div className="dataCard kiaSales">
        <Bar
          className="barChart"
          data={{
            labels:
              kiaSheet1.length > 0
                ? Object.keys(kiaSheet1[0]).filter(
                    (key) => key !== "Model Name"
                  )
                : [],
            datasets: kiaSheet1.map((model) => ({
              label: model["Model Name"],
              data: Object.values(model).filter(
                (value) => typeof value === "number"
              ),
              backgroundColor: randomColor(),
            })),
          }}
          options={{ plugins: { title: { text: "KIA Monthly Sales" } } }}
        />
      </div>

      <div className="dataCard toyotaSales">
        <Bar
          className="barChart"
          data={{
            labels:
              toyotaSheet1.length > 0
                ? Object.keys(toyotaSheet1[0]).filter(
                    (key) => key !== "Model Name"
                  )
                : [],
            datasets: toyotaSheet1.map((model) => ({
              label: model["Model Name"],
              data: Object.values(model).filter(
                (value) => typeof value === "number"
              ),
              backgroundColor: randomColor(),
            })),
          }}
          options={{ plugins: { title: { text: "Toyota Monthly Sales" } } }}
        />
      </div>

      {/* ✅ Replaced Volkswagen with Audi */}
      <div className="dataCard audiSales">
        <Bar
          className="barChart"
          data={{
            labels:
              audiSheet1.length > 0
                ? Object.keys(audiSheet1[0]).filter(
                    (key) => key !== "Model Name"
                  )
                : [],
            datasets: audiSheet1.map((model) => ({
              label: model["Model Name"],
              data: Object.values(model).filter(
                (value) => typeof value === "number"
              ),
              backgroundColor: randomColor(),
            })),
          }}
          options={{
            plugins: { title: { text: "Audi Monthly Sales" } },
          }}
        />
      </div>

      <div className="dataCard hondaSales">
        <Bar
          className="barChart"
          data={{
            labels:
              hondaSheet1.length > 0
                ? Object.keys(hondaSheet1[0]).filter(
                    (key) => key !== "Model Name"
                  )
                : [],
            datasets: hondaSheet1.map((model) => ({
              label: model["Model Name"],
              data: Object.values(model).filter(
                (value) => typeof value === "number"
              ),
              backgroundColor: randomColor(),
            })),
          }}
          options={{ plugins: { title: { text: "Honda Monthly Sales" } } }}
        />
      </div>

      {skodaSheet1.length > 0 && (
        <div className="dataCard skodaSales">
          <Bar
            className="barChart"
            data={{
              labels: Object.keys(skodaSheet1[0]).filter(
                (key) => key !== "Model Name"
              ),
              datasets: skodaSheet1.map((model) => ({
                label: model["Model Name"],
                data: Object.values(model).filter(
                  (value) => typeof value === "number"
                ),
                backgroundColor: randomColor(),
              })),
            }}
            options={{ plugins: { title: { text: "Skoda Monthly Sales" } } }}
          />
        </div>
      )}

      {tataSheet1.length > 0 && (
        <div className="dataCard tataSales">
          <Bar
            className="barChart"
            data={{
              labels: Object.keys(tataSheet1[0]).filter(
                (key) => key !== "Model Name"
              ),
              datasets: tataSheet1.map((model) => ({
                label: model["Model Name"],
                data: Object.values(model).filter(
                  (value) => typeof value === "number"
                ),
                backgroundColor: randomColor(),
              })),
            }}
            options={{ plugins: { title: { text: "TATA Monthly Sales" } } }}
          />
        </div>
      )}
    </div>
  );
};

export default Sales;
