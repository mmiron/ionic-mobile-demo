import { Injectable } from '@angular/core';

import { InventoryTodo } from '../../models/inventory-todo';

@Injectable()
export class InventoryTodos {
  inventoryTodos: InventoryTodo[] = [];

  constructor() {
    let inventoryTodos = [
      {
        "name": "DAL/DOCK-1 (AOG)",
        "due" : "02-12-2018 11:00",
        "iconColor": "blue",
        "pickList" : [{
          "partNumber" : "65437-7",
          "serialNumber": "35476-7",
          "bin" : "19-A"
        },
        {
          "partNumber" : "88320-3",
          "serialNumber": "53233-6",
          "bin" : "21-A",
          "pickList" : [{
            "partNumber" : "65437-7",
            "serialNumber": "35476-7",
            "bin" : "19-A"
          },
          {
            "partNumber" : "88320-3",
            "serialNumber": "53233-6",
            "bin" : "21-A"
          },{
            "partNumber" : "53242-6",
            "serialNumber": "41343-2",
            "bin" : "22-A"
          }]
        },{
          "partNumber" : "53242-6",
          "serialNumber": "41343-2",
          "bin" : "22-A",
          "pickList" : [{
            "partNumber" : "65437-7",
            "serialNumber": "35476-7",
            "bin" : "19-A"
          },
          {
            "partNumber" : "88320-3",
            "serialNumber": "53233-6",
            "bin" : "21-A"
          },{
            "partNumber" : "53242-6",
            "serialNumber": "41343-2",
            "bin" : "22-A"
          }]
        }]
      },
      {
        "name": "DAL/DOCK-1 (AOG)",
        "due" : "02-12-2018 11:30",
        "iconColor": "blue",
        "pickList" : [{
          "partNumber" : "65437-7",
          "serialNumber": "35476-7",
          "bin" : "19-A"
        },
        {
          "partNumber" : "88320-3",
          "serialNumber": "53233-6",
          "bin" : "21-A"
        },{
          "partNumber" : "53242-6",
          "serialNumber": "41343-2",
          "bin" : "22-A"
        }]
      },
      {
        "name": "DAL/DOCK-1 (AOG)",
        "due" : "02-12-2018 12:00",
        "iconColor": "red",
        "pickList" : [{
          "partNumber" : "65437-7",
          "serialNumber": "35476-7",
          "bin" : "19-A"
        },
        {
          "partNumber" : "88320-3",
          "serialNumber": "53233-6",
          "bin" : "21-A"
        },{
          "partNumber" : "53242-6",
          "serialNumber": "41343-2",
          "bin" : "22-A"
        }]
      },
      {
        "name": "DAL/BAY-2 (HAZMAT)",
        "due" : "02-12-2018 12:30",
        "iconColor": "purple",
        "pickList" : [{
          "partNumber" : "65437-7",
          "serialNumber": "35476-7",
          "bin" : "19-A"
        },
        {
          "partNumber" : "88320-3",
          "serialNumber": "53233-6",
          "bin" : "21-A"
        },{
          "partNumber" : "53242-6",
          "serialNumber": "41343-2",
          "bin" : "22-A"
        }]
      },
      {
        "name": "DAL/BAY-1",
        "due" : "02-12-2018 13:30",
        "iconColor": "green",
        "pickList" : [{
          "partNumber" : "65437-7",
          "serialNumber": "35476-7",
          "bin" : "19-A"
        },
        {
          "partNumber" : "88320-3",
          "serialNumber": "53233-6",
          "bin" : "21-A"
        },{
          "partNumber" : "53242-6",
          "serialNumber": "41343-2",
          "bin" : "22-A"
        }]
      },
      {
        "name": "DAL/BAY-1",
        "due" : "02-12-2018 13:45",
        "iconColor": "green",
        "pickList" : [{
          "partNumber" : "65437-7",
          "serialNumber": "35476-7",
          "bin" : "19-A"
        },
        {
          "partNumber" : "88320-3",
          "serialNumber": "53233-6",
          "bin" : "21-A"
        },{
          "partNumber" : "53242-6",
          "serialNumber": "41343-2",
          "bin" : "22-A"
        }]
      },
      {
        "name": "DAL/BAY-3",
        "due" : "02-12-2018 14:00",
        "iconColor": "brown",
        "pickList" : [{
          "partNumber" : "65437-7",
          "serialNumber": "35476-7",
          "bin" : "19-A"
        },
        {
          "partNumber" : "88320-3",
          "serialNumber": "53233-6",
          "bin" : "21-A"
        },{
          "partNumber" : "53242-6",
          "serialNumber": "41343-2",
          "bin" : "22-A"
        }]
      }
      
    ];

    for (let inventoryTodo of inventoryTodos) {
      this.inventoryTodos.push(new InventoryTodo(inventoryTodo));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.inventoryTodos;
    }

    return this.inventoryTodos.filter((inventoryTodo) => {
      for (let key in params) {
        let field = inventoryTodo[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return inventoryTodo;
        } else if (field == params[key]) {
          return inventoryTodo;
        }
      }
      return null;
    });
  }
}
