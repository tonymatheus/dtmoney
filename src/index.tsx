import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

import { createServer, Model } from "miragejs";
import Schema from "miragejs/orm/schema";
import { title } from "process";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer  de Web  site",
          type: "deposit",
          category: "Development",
          amount: 10000,
          createdAt: new Date("2021-02-12 07:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "contas casa",
          amount: 1500,
          createdAt: new Date("2021-02-29 09:00:00"),
        },
        {
          id: 3,
          title: "Aluguel Apartamento",
          type: "entrada",
          category: "contas casa",
          amount: 150,
          createdAt: new Date("2021-02-29 09:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
