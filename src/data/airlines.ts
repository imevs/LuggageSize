import type { Airline } from '../types';

export const airlines: Airline[] = [
  {
    "id": "AEGAIR",
    "name": "Aegean Airlines",
    "iata": "A3",
    "country": "GR",
    "alliance": "Star Alliance",
    "region": "Europe",
    "website": "https://en.aegeanair.com/travel-info/baggage/cabin-baggage/",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 45,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AERLIN",
    "name": "Aer Lingus",
    "iata": "EI",
    "country": "IE",
    "alliance": "oneworld",
    "region": "Europe",
    "website": "https://www.aerlingus.com/prepare-packing/baggage-information/carry-on-baggage/",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 24,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 25,
            "width": 33,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AERLINRE",
    "name": "Aer Lingus Regional",
    "iata": "EI",
    "country": "IE",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.aerlingus.com/prepare-packing/baggage-information/carry-on-baggage/",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 48,
            "width": 33,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AER",
    "name": "Aeroflot",
    "iata": "SU",
    "country": "RU",
    "alliance": "SkyTeam",
    "region": "Europe",
    "website": "https://www.aeroflot.ru/ru-en/information/airport/baggage/hand_luggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": null,
          "weight": {
            "value": 5,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": {
          "dimensions": null,
          "weight": {
            "value": 23,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        }
      },
      "business": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 15,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": {
          "dimensions": null,
          "weight": {
            "value": 322,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        }
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AERARG",
    "name": "Aerolineas Argentinas",
    "iata": "AR",
    "country": "AR",
    "alliance": "SkyTeam",
    "region": "Latin America",
    "website": "https://www.aerolineas.com.ar/en-ar/luggage/baggage_allowance",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AER5",
    "name": "Aeromexico",
    "iata": "AM",
    "country": "MX",
    "alliance": "SkyTeam",
    "region": "Latin America",
    "website": "https://www.aeromexico.com/en-us/travel-information/baggage/carry-on-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 31,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AIRALG",
    "name": "Air Algerie",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.airalgerie.dz/en/passenger/baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AIRARA",
    "name": "Air Arabia",
    "iata": "G9",
    "country": "AE",
    "alliance": null,
    "region": "Middle East",
    "website": "https://www.airarabia.com/en/hand-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 33,
            "width": 25,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AIRAST",
    "name": "Air Astana",
    "iata": "KC",
    "country": "KZ",
    "alliance": null,
    "region": "Central Asia",
    "website": "https://www.airastana.com/kaz/en-us/Information/Before-You-Fly/Baggage/Cabin-Baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 45,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AIRAUS",
    "name": "Air Austral",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.air-austral.com/en/prepare-your-flight/baggage/cabin-baggage.html",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AIRBAL",
    "name": "Air Baltic",
    "iata": "BT",
    "country": "LV",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.airbaltic.com/en/cabin-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AIRCAI",
    "name": "Air Cairo",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.aircairo.com/baggage-information",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AIRCAN",
    "name": "Air Canada",
    "iata": "AC",
    "country": "CA",
    "alliance": "Star Alliance",
    "region": "North America",
    "website": "https://www.aircanada.com/en/ca/aco/contents/travel/baggage/carry-on.html",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 33,
            "width": 43,
            "height": 16,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AIRCHI",
    "name": "Air China",
    "iata": "CA",
    "country": "CN",
    "alliance": "Star Alliance",
    "region": "Asia",
    "website": "https://www.airchina.com/us/en/travel-guide/baggage-policies/cabin-baggage.shtml",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 5,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 31,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AIRCOR",
    "name": "Air Corsica",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.aircorsica.com/en/prepare-your-trip/baggage/",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AIREUR",
    "name": "Air Europa",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.air-europa.com/en/information/baggage/cabin-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AIRFRA",
    "name": "Air France",
    "iata": "AF",
    "country": "FR",
    "alliance": "SkyTeam",
    "region": "Europe",
    "website": "https://www.airfrance.com/en/information/baggage/carry-on-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 12,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 10,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AIRIND",
    "name": "Air India",
    "iata": "AI",
    "country": "IN",
    "alliance": "Star Alliance",
    "region": "Asia",
    "website": "https://www.airindia.com/in/en/plan-your-trip/baggage.html",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AIRMAL",
    "name": "Air Malta",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.kmmaltairlines.com/en/travel-information/baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AIRMAU",
    "name": "Air Mauritius",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.airmauritius.com/discover/travel-information/baggage",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AIRMOL",
    "name": "Air Moldova",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 50,
            "width": 40,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AIRNEWZE",
    "name": "Air New Zealand",
    "iata": "NZ",
    "country": "NZ",
    "alliance": "Star Alliance",
    "region": "Oceania",
    "website": "https://www.airnewzealand.com/carry-on-baggage",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 31,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AIRSER",
    "name": "Air Serbia",
    "iata": "JU",
    "country": "RS",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.airserbia.com/en/information/baggage/hand-luggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": {
          "dimensions": null,
          "weight": {
            "value": 23,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        }
      },
      "business": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 82,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": {
          "dimensions": null,
          "weight": {
            "value": 322,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        }
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AIRTAH",
    "name": "Air Tahiti",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.airtahiti.com/en/baggage-allowance",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 5,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AIRTAHNU",
    "name": "Air Tahiti Nui",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.airtahitinui.com/baggage-allowances",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AIRTRA",
    "name": "Air Transat",
    "iata": "TS",
    "country": "CA",
    "alliance": null,
    "region": "North America",
    "website": "https://www.airtransat.com/en-CA/travel-information/baggage/carry-on-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 51,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 43,
            "width": 30,
            "height": 12,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AIRVAN",
    "name": "Air Vanuatu",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.airvanuatu.com/baggage",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 48,
            "width": 34,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "ALAAIR",
    "name": "Alaska Airlines",
    "iata": "AS",
    "country": "US",
    "alliance": "oneworld",
    "region": "North America",
    "website": "https://www.alaskaair.com/content/travel-info/policies/baggage-carryon",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 31,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "ALI",
    "name": "Alitalia",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.ita-airways.com/en_en/fly-ita/baggage/hand-baggage.html",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "ALLNIPAI",
    "name": "All Nippon Airways",
    "iata": "NH",
    "country": "JP",
    "alliance": "Star Alliance",
    "region": "Asia",
    "website": "https://www.ana.co.jp/en/jp/travel-information/baggage/carry-on/",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 31,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "ALLAIR",
    "name": "Allegiant Air",
    "iata": "G4",
    "country": "US",
    "alliance": null,
    "region": "North America",
    "website": "https://www.allegiantair.com/baggage-policy",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 41,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 45,
            "width": 35,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "ALR",
    "name": "Alrosa",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": null,
        "personalItem": {
          "dimensions": null,
          "weight": {
            "value": 5,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AMEAIR",
    "name": "American Airlines",
    "iata": "AA",
    "country": "US",
    "alliance": "oneworld",
    "region": "North America",
    "website": "https://www.aa.com/i18n/travel-info/baggage/carry-on-baggage.jsp",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 45,
            "width": 35,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "ARK",
    "name": "Arkia",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.arkia.com/en/information/baggage-policy/",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "ASIAIR",
    "name": "Asiana Airlines",
    "iata": "OZ",
    "country": "KR",
    "alliance": "Star Alliance",
    "region": "Asia",
    "website": "https://flyasiana.com/C/US/EN/contents/carry-on-baggage/90E5284345D14201A5119E1528628043",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 31,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "ATLAIR",
    "name": "Atlantic Airways",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.atlanticairways.com/en/travel-info/baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 50,
            "width": 40,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AUR",
    "name": "Aurigny",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.aurigny.com/faq",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 36,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AURAIRSE",
    "name": "Aurigny Air Services",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.aurigny.com/faq",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": null,
        "personalItem": {
          "dimensions": {
            "length": 35,
            "width": 25,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AUR38",
    "name": "Aurora",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 15,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AUSAIR",
    "name": "Austrian Airlines",
    "iata": "OS",
    "country": "AT",
    "alliance": "Star Alliance",
    "region": "Europe",
    "website": "https://www.austrian.com/at/en/carry-on-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 10,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AVI",
    "name": "Avianca",
    "iata": "AV",
    "country": "CO",
    "alliance": "Star Alliance",
    "region": "Latin America",
    "website": "https://www.avianca.com/us/en/plan-your-trip/baggage/carry-on-baggage/",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": null,
        "personalItem": {
          "dimensions": {
            "length": 46,
            "width": 36,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AVIAIR",
    "name": "Avianca Airlines",
    "iata": "AV",
    "country": "CO",
    "alliance": "Star Alliance",
    "region": "Latin America",
    "website": "https://www.avianca.com/us/en/plan-your-trip/baggage/carry-on-baggage/",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AZUAIR",
    "name": "Azur Air",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": null,
        "personalItem": null,
        "checked": {
          "dimensions": null,
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        }
      },
      "business": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 5,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AZOAIR",
    "name": "Azores Airlines",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.azoresairlines.pt/en/information/baggage/cabin-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AZU",
    "name": "Azul",
    "iata": "AD",
    "country": "BR",
    "alliance": null,
    "region": "Latin America",
    "website": "https://www.voeazul.com.br/en/travel-info/baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "AZI",
    "name": "Azimuth",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 5,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": {
          "dimensions": null,
          "weight": {
            "value": 23,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        }
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "BEL",
    "name": "Belavia",
    "iata": "B2",
    "country": "BY",
    "alliance": null,
    "region": "Europe",
    "website": "https://belavia.by/en/baggage/",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": {
          "dimensions": null,
          "weight": {
            "value": 23,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        }
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "BINCAN",
    "name": "Binter Canarias",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.bintercanarias.com/en/flights/prepare-your-trip/baggage",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 45,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 6,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "BLUAIR",
    "name": "Blue Air",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "BRIAIR",
    "name": "British Airways",
    "iata": "BA",
    "country": "GB",
    "alliance": "oneworld",
    "region": "Europe",
    "website": "https://www.britishairways.com/travel/baggage-essentials",
    "generosity": "generous",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 45,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 23,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 45,
            "width": 36,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "BRUAIR",
    "name": "Brussels Airlines",
    "iata": "SN",
    "country": "BE",
    "alliance": "Star Alliance",
    "region": "Europe",
    "website": "https://www.brusselsairlines.com/be/en/baggage/carry-on-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 10,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "BULAIR",
    "name": "Bulgaria Air",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.air.bg/en/baggage-policy",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 31,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "CATPAC",
    "name": "Cathay Pacific",
    "iata": "CX",
    "country": "HK",
    "alliance": "oneworld",
    "region": "Asia",
    "website": "https://www.cathaypacific.com/cx/en_HK/baggage/baggage-allowance.html",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 31,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "CEBPAC",
    "name": "Cebu Pacific",
    "iata": "5J",
    "country": "PH",
    "alliance": null,
    "region": "Asia",
    "website": "https://www.cebupacificair.com/pages/plan-trip/baggage-information",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "CHIAIR",
    "name": "China Airlines",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.china-airlines.com/us/en/prepare/travel-information/baggage-information/carry-on-baggage",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 31,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "CHIEAS",
    "name": "China Eastern",
    "iata": "MU",
    "country": "CN",
    "alliance": "SkyTeam",
    "region": "Asia",
    "website": "https://www.ceair.com/en/baggage-rules.html",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": null,
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 31,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "CHIEASAI",
    "name": "China Eastern Airlines",
    "iata": "MU",
    "country": "CN",
    "alliance": "SkyTeam",
    "region": "Asia",
    "website": "https://www.ceair.com/en/baggage-rules.html",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "CHISOU",
    "name": "China Southern",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.csair.com/en/tourguide/luggage_service/carryon_luggage/",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 5,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 31,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "CON",
    "name": "Condor",
    "iata": "DE",
    "country": "DE",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.condor.com/en/flight-preparation/baggage-and-animals/carry-on-baggage.jsp",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "COPAIR",
    "name": "Copa Airlines",
    "iata": "CM",
    "country": "PA",
    "alliance": "Star Alliance",
    "region": "Latin America",
    "website": "https://www.copaair.com/en-gs/travel-information/baggage-policy/carry-on-baggage/",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 26,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "CROAIR",
    "name": "Croatia Airlines",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.croatiaairlines.com/travel-info/baggage-information/carry-on-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 10,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "CZEAIR",
    "name": "Czech Airlines",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.csa.cz/en/portal/our-services/baggage/carry-on-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 45,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "DELAIRLI",
    "name": "Delta Air Lines",
    "iata": "DL",
    "country": "US",
    "alliance": "SkyTeam",
    "region": "North America",
    "website": "https://www.delta.com/us/en/baggage/carry-on/carry-on-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 35,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "EAS",
    "name": "EasyJet",
    "iata": "U2",
    "country": "GB",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.easyjet.com/en/help/baggage/cabin-bags-and-hold-luggage",
    "generosity": "generous",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 45,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 15,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 45,
            "width": 36,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "EGY",
    "name": "EgyptAir",
    "iata": "MS",
    "country": "EG",
    "alliance": "Star Alliance",
    "region": "Africa",
    "website": "https://www.egyptair.com/en/fly/baggage/Pages/carry-on-baggage.aspx",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": {
          "dimensions": null,
          "weight": {
            "value": 23,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        }
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "ELAL",
    "name": "El Al",
    "iata": "LY",
    "country": "IL",
    "alliance": null,
    "region": "Middle East",
    "website": "https://www.elal.com/en/PassengersInfo/Baggage/Pages/Carry-on-Baggage.aspx",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 45,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "EMI",
    "name": "Emirates",
    "iata": "EK",
    "country": "AE",
    "alliance": null,
    "region": "Middle East",
    "website": "https://www.emirates.com/english/before-you-fly/baggage/cabin-baggage/",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 38,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 45,
            "width": 35,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": {
          "dimensions": null,
          "weight": {
            "value": 25,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        }
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "ETHAIR",
    "name": "Ethiopian Airlines",
    "iata": "ET",
    "country": "ET",
    "alliance": "Star Alliance",
    "region": "Africa",
    "website": "https://www.ethiopianairlines.com/AA/EN/book/baggage-information/carry-on-baggage",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "ETIAIR",
    "name": "Etihad Airways",
    "iata": "EY",
    "country": "AE",
    "alliance": null,
    "region": "Middle East",
    "website": "https://www.etihad.com/en-ae/fly-etihad/baggage/allowance",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 50,
            "width": 40,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 39,
            "width": 23,
            "height": 19,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "EUR",
    "name": "Eurowings",
    "iata": "EW",
    "country": "DE",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.eurowings.com/en/information/baggage/carry-on-baggage.html",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "FIN",
    "name": "Finnair",
    "iata": "AY",
    "country": "FI",
    "alliance": "oneworld",
    "region": "Europe",
    "website": "https://www.finnair.com/en/baggage/carry-on-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "FLY",
    "name": "FlyDubai",
    "iata": "FZ",
    "country": "AE",
    "alliance": null,
    "region": "Middle East",
    "website": "https://www.flydubai.com/en/plan/baggage/hand-baggage",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 38,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 33,
            "width": 25,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": {
          "dimensions": null,
          "weight": {
            "value": 20,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        }
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "FLY72",
    "name": "FlyOne",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://flyone.eu/en/Information/Baggage-policy",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 50,
            "width": 40,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "FROAIR",
    "name": "Frontier Airlines",
    "iata": "F9",
    "country": "US",
    "alliance": null,
    "region": "North America",
    "website": "https://www.flyfrontier.com/travel/travel-info/baggage/",
    "generosity": "generous",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 60,
            "width": 41,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 16,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 46,
            "width": 36,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "GARIND",
    "name": "Garuda Indonesia",
    "iata": "GA",
    "country": "ID",
    "alliance": "SkyTeam",
    "region": "Asia",
    "website": "https://www.garuda-indonesia.com/id/en/garuda-indonesia-experience/on-ground/baggage/carry-on-baggage",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 34,
            "height": 17,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "HAWAIR",
    "name": "Hawaiian Airlines",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.hawaiianairlines.com/our-services/at-the-airport/baggage-fees",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 11,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "IBE",
    "name": "Iberia",
    "iata": "IB",
    "country": "ES",
    "alliance": "oneworld",
    "region": "Europe",
    "website": "https://www.iberia.com/gb/baggage/hand-luggage/",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 45,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "ICE",
    "name": "Icelandair",
    "iata": "FI",
    "country": "IS",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.icelandair.com/support/baggage/carry-on-baggage/",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "INDAIR",
    "name": "IndiGo Airlines",
    "iata": "6E",
    "country": "IN",
    "alliance": null,
    "region": "Asia",
    "website": "https://www.goindigo.in/information/baggage.html",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "JETAIR",
    "name": "Jet Airways",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "JET",
    "name": "Jet2.com",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.jet2.com/en/flights/baggage/hand-luggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 45,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "JETAIR81",
    "name": "JetBlue Airways",
    "iata": "B6",
    "country": "US",
    "alliance": null,
    "region": "North America",
    "website": "https://www.jetblue.com/help/baggage-information",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 43,
            "width": 33,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "KENAIR",
    "name": "Kenya Airways",
    "iata": "KQ",
    "country": "KE",
    "alliance": "SkyTeam",
    "region": "Africa",
    "website": "https://www.kenya-airways.com/prepare-for-travel/baggage/hand-baggage/",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 12,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "KLMROYDU",
    "name": "KLM Royal Dutch",
    "iata": "KL",
    "country": "NL",
    "alliance": "SkyTeam",
    "region": "Europe",
    "website": "https://www.klm.com/us/en/information/before-you-fly/baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 12,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "KORAIR",
    "name": "Korean Air",
    "iata": "KE",
    "country": "KR",
    "alliance": "SkyTeam",
    "region": "Asia",
    "website": "https://www.koreanair.com/content/koreanair/global/en/traveling/baggage/carry-on-baggage.html",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 31,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "KUWAIR",
    "name": "Kuwait Airways",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.kuwaitairways.com/en/information/baggage/carry-on-baggage",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 46,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 22,
            "width": 18,
            "height": 10,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "LATAIR",
    "name": "LATAM Airlines",
    "iata": "LA",
    "country": "CL",
    "alliance": "oneworld",
    "region": "Latin America",
    "website": "https://www.latamairlines.com/us/en/experience/prepare-your-trip/baggage/carry-on",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "LOTPOL",
    "name": "LOT Polish",
    "iata": "LO",
    "country": "PL",
    "alliance": "Star Alliance",
    "region": "Europe",
    "website": "https://www.lot.com/gb/en/travel/baggage/carry-on-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 31,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "LUF",
    "name": "Lufthansa",
    "iata": "LH",
    "country": "DE",
    "alliance": "Star Alliance",
    "region": "Europe",
    "website": "https://www.lufthansa.com/us/en/baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 10,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "MALAIR",
    "name": "Malaysia Airlines",
    "iata": "MH",
    "country": "MY",
    "alliance": "oneworld",
    "region": "Asia",
    "website": "https://www.malaysiaairlines.com/my/en/plan-trip/baggage/cabin-baggage.html",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 46,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 31,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "NOR",
    "name": "Nordwind",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": {
          "dimensions": null,
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        }
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "NORAIR",
    "name": "Norwegian Air",
    "iata": "DY",
    "country": "NO",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.norwegian.com/en/travel-info/baggage/hand-baggage/",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": null,
        "personalItem": {
          "dimensions": {
            "length": 38,
            "width": 30,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "OMAAIR",
    "name": "Oman Air",
    "iata": "WY",
    "country": "OM",
    "alliance": null,
    "region": "Middle East",
    "website": "https://www.omanair.com/om/en/baggage-allowance",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 31,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "PEGAIR",
    "name": "Pegasus Airlines",
    "iata": "PC",
    "country": "TR",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.flypgs.com/en/useful-info/flight-info/baggage-allowance",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 35,
            "width": 20,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "PHIAIR",
    "name": "Philippine Airlines",
    "iata": "PR",
    "country": "PH",
    "alliance": null,
    "region": "Asia",
    "website": "https://www.philippineairlines.com/en/home/travel-essentials/baggage/hand-carry-baggage-allowance",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 31,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "POB",
    "name": "Pobeda",
    "iata": "DP",
    "country": "RU",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.flypobeda.ru/information/baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 36,
            "width": 30,
            "height": 27,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": {
          "dimensions": null,
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        }
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "QAN",
    "name": "Qantas",
    "iata": "QF",
    "country": "AU",
    "alliance": "oneworld",
    "region": "Oceania",
    "website": "https://www.qantas.com/au/en/travel-info/baggage/carry-on-baggage.html",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 48,
            "width": 34,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "QATAIR",
    "name": "Qatar Airways",
    "iata": "QR",
    "country": "QA",
    "alliance": "oneworld",
    "region": "Middle East",
    "website": "https://www.qatarairways.com/en/baggage/cabin-baggage.html",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 50,
            "width": 37,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 31,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "REDWIN",
    "name": "Red Wings",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": null,
        "personalItem": null,
        "checked": {
          "dimensions": null,
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        }
      },
      "business": {
        "carryOn": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 5,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "ROS",
    "name": "Rossiya",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 5,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": {
          "dimensions": null,
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        }
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "RYA",
    "name": "Ryanair",
    "iata": "FR",
    "country": "IE",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.ryanair.com/gb/en/useful-info/help-centre/terms-and-conditions/baggage-policy",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 20,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "S7AIR",
    "name": "S7 Airlines",
    "iata": "S7",
    "country": "RU",
    "alliance": "oneworld",
    "region": "Europe",
    "website": "https://www.s7.ru/ru/information/baggage/hand-luggage.dot",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": {
          "dimensions": null,
          "weight": {
            "value": 23,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        }
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "SCASAS",
    "name": "Scandinavian (SAS)",
    "iata": "SK",
    "country": "SE",
    "alliance": "Star Alliance",
    "region": "Europe",
    "website": "https://www.flysas.com/en/travel-info/baggage/carry-on/",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "SINAIR",
    "name": "Singapore Airlines",
    "iata": "SQ",
    "country": "SG",
    "alliance": "Star Alliance",
    "region": "Asia",
    "website": "https://www.singaporeair.com/en_UK/us/travel-info/baggage/",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 10,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "SOUAIR",
    "name": "Southwest Airlines",
    "iata": "WN",
    "country": "US",
    "alliance": null,
    "region": "North America",
    "website": "https://www.southwest.com/help/baggage/carry-on-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 61,
            "width": 41,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 47,
            "width": 34,
            "height": 22,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "SPIAIR",
    "name": "Spirit Airlines",
    "iata": "NK",
    "country": "US",
    "alliance": null,
    "region": "North America",
    "website": "https://www.spirit.com/help/baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 46,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 45,
            "width": 35,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "SWISWI",
    "name": "Swiss (SWISS)",
    "iata": "LX",
    "country": "CH",
    "alliance": "Star Alliance",
    "region": "Europe",
    "website": "https://www.swiss.com/ch/en/prepare/baggage/hand-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 31,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "TAPAIRPO",
    "name": "TAP Air Portugal",
    "iata": "TP",
    "country": "PT",
    "alliance": "Star Alliance",
    "region": "Europe",
    "website": "https://www.flytap.com/en-pt/baggage/carry-on-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "THAAIR",
    "name": "Thai Airways",
    "iata": "TG",
    "country": "TH",
    "alliance": "Star Alliance",
    "region": "Asia",
    "website": "https://www.thaiairways.com/en/travel_information/baggage/baggage_allowance.page",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 45,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "TRA",
    "name": "Transavia",
    "iata": "HV",
    "country": "NL",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.transavia.com/en-eu/faq/baggage/",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "TURAIR",
    "name": "Turkish Airlines",
    "iata": "TK",
    "country": "TR",
    "alliance": "Star Alliance",
    "region": "Europe",
    "website": "https://www.turkishairlines.com/en-int/any-questions/cabin-baggage/",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 31,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": {
          "dimensions": null,
          "weight": {
            "value": 23,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        }
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": {
          "dimensions": null,
          "weight": {
            "value": 32,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        }
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "UKRINTUI",
    "name": "Ukraine Intl (UIA)",
    "iata": "PS",
    "country": "UA",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.flyuia.com/ua/en/information/baggage/hand-baggage",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 10,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "UNIAIR",
    "name": "United Airlines",
    "iata": "UA",
    "country": "US",
    "alliance": "Star Alliance",
    "region": "North America",
    "website": "https://www.united.com/en/us/fly/travel/baggage/carry-on.html",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 43,
            "width": 25,
            "height": 22,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "URAAIR",
    "name": "Ural Airlines",
    "iata": "U6",
    "country": "RU",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.uralairlines.ru/information/baggage/",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": null,
        "personalItem": null,
        "checked": {
          "dimensions": null,
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        }
      },
      "business": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "VIEAIR",
    "name": "Vietnam Airlines",
    "iata": "VN",
    "country": "VN",
    "alliance": "SkyTeam",
    "region": "Asia",
    "website": "https://www.vietnamairlines.com/us/en/travel-information/baggage/cabin-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 12,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 50,
            "width": 30,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "VIRATL",
    "name": "Virgin Atlantic",
    "iata": "VS",
    "country": "GB",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.virginatlantic.com/help/baggage/hand-baggage-allowance",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 31,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "WES",
    "name": "WestJet",
    "iata": "WS",
    "country": "CA",
    "alliance": null,
    "region": "North America",
    "website": "https://www.westjet.com/en-ca/travel-info/baggage/carry-on",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 53,
            "width": 38,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 41,
            "width": 33,
            "height": 15,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "WIZAIR",
    "name": "Wizz Air",
    "iata": "W6",
    "country": "HU",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.wizzair.com/en-gb/information-and-services/travel-information/baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": null,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "THALIOAI",
    "name": "Thai Lion Air",
    "iata": "SL",
    "country": "TH",
    "alliance": null,
    "region": "Asia",
    "website": "https://www.lionairthai.com/en/Flight/Baggage-Information",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 40,
            "width": 30,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "LOG",
    "name": "Loganair",
    "iata": "LM",
    "country": "GB",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.loganair.co.uk/travel-info/baggage/",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 40,
            "width": 35,
            "height": 18,
            "unit": "cm"
          },
          "weight": {
            "value": 6,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "REXREGEX",
    "name": "REX Regional Express Airlines",
    "iata": "ZL",
    "country": "AU",
    "alliance": null,
    "region": "Oceania",
    "website": "https://www.rex.com.au/FlightInfo/Baggage.aspx",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 48,
            "width": 34,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "VIRAUS",
    "name": "Virgin Australia",
    "iata": "VA",
    "country": "AU",
    "alliance": null,
    "region": "Oceania",
    "website": "https://www.virginaustralia.com/au/en/travel-info/baggage/carry-on-baggage/",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 48,
            "width": 34,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "ASTAIR",
    "name": "Astra Airlines",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 50,
            "width": 30,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "SUNAIR",
    "name": "Sunwing Airlines",
    "iata": "WG",
    "country": "CA",
    "alliance": null,
    "region": "North America",
    "website": "https://www.sunwing.ca/en/travel-info/baggage/carry-on-baggage",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 51,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 5,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "GEOAIR",
    "name": "Georgian Airways",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.georgian-airways.com/en/services/baggage.php",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "GOLAIR",
    "name": "GOL Airlines",
    "iata": "G3",
    "country": "BR",
    "alliance": null,
    "region": "Latin America",
    "website": "https://www.voegol.com.br/en/travel-information/baggage/carry-on-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "KLMROY26",
    "name": "KLM Royal Dutch Airlines",
    "iata": "KL",
    "country": "NL",
    "alliance": "SkyTeam",
    "region": "Europe",
    "website": "https://www.klm.com/us/en/information/before-you-fly/baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 12,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "SPI",
    "name": "SpiceJet",
    "iata": "SG",
    "country": "IN",
    "alliance": null,
    "region": "Asia",
    "website": "https://www.spicejet.com/carry-on-baggage.aspx",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "ROYBRUAI",
    "name": "Royal Brunei Airlines",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.flyroyalbrunei.com/en/travel-information/baggage/",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 38,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "ARMAIR",
    "name": "Armenia Aircompany",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "CAR",
    "name": "Carpatair",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 5,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "CORINT",
    "name": "Corsair International",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 12,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "CUB",
    "name": "Cubana",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 5,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "HAIAIR",
    "name": "Hainan Airlines",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.hainanairlines.com/US/GB/Carry-on-Baggage",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 5,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "HELAIR",
    "name": "Helvetic Airways",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 5,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "JETTIM",
    "name": "Jet Time",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 5,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "LOTPOLAI",
    "name": "LOT Polish Airlines",
    "iata": "LO",
    "country": "PL",
    "alliance": "Star Alliance",
    "region": "Europe",
    "website": "https://www.lot.com/gb/en/travel/baggage/carry-on-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "OLYAIR",
    "name": "Olympic Air",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.olympicair.com/en/travel/baggage/allowance",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "TUI",
    "name": "TUIfly",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.tuifly.com/en/service/baggage-information",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 6,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "UKRINTAI",
    "name": "Ukraine International Airlines",
    "iata": "PS",
    "country": "UA",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.flyuia.com/ua/en/information/baggage/hand-baggage",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "SWI",
    "name": "SWISS",
    "iata": "LX",
    "country": "CH",
    "alliance": "Star Alliance",
    "region": "Europe",
    "website": "https://www.swiss.com/ch/en/prepare/baggage/hand-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "IRAAIR",
    "name": "Iran Air",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.iranair.com/en/baggage-information",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 45,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "MIDEASAI",
    "name": "Middle East Airlines",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.mea.com.lb/english/flying-with-mea/baggage/hand",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 40,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "PAKINTAI",
    "name": "Pakistan International Airlines",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.piac.com.pk/passenger-information/baggage-information",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 38,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "ROSAIR",
    "name": "Rossiya Airlines",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "ROYAIRMA",
    "name": "Royal Air Maroc",
    "iata": "AT",
    "country": "MA",
    "alliance": "oneworld",
    "region": "Africa",
    "website": "https://www.royalairmaroc.com/us-en/baggage/cabin-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "SRIAIR",
    "name": "SriLankan Airlines",
    "iata": "UL",
    "country": "LK",
    "alliance": "oneworld",
    "region": "Asia",
    "website": "https://www.srilankan.com/en_uk/plan-and-book/baggage-allowance",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "SUN",
    "name": "SunExpress",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.sunexpress.com/en/baggage/hand-luggage/",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "SYRAIR",
    "name": "Syrian Air",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 50,
            "width": 40,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "TAR",
    "name": "TAROM",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.tarom.ro/en/information/travel-information/baggage/hand-luggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "TURAIR50",
    "name": "Turkmenistan Airlines",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://turkmenistanairlines.tm/travel-info/baggage",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 50,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 5,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "UZBAIR",
    "name": "Uzbekistan Airways",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.uzairways.com/en/information/baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 45,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "WID",
    "name": "WiderÃ¸e",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "BANAIR",
    "name": "Bangkok Airways",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.bangkokair.com/travel-information/baggage-policy",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 5,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "BLUPANAI",
    "name": "Blue Panorama Airlines",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "DRA",
    "name": "Dragonair",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 5,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "EDEAIR",
    "name": "Edelweiss Air",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.flyedelweiss.com/en/Travel-information/Baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 40,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "EVAAIR",
    "name": "EVA Air",
    "iata": "BR",
    "country": "TW",
    "alliance": "Star Alliance",
    "region": "Asia",
    "website": "https://www.evaair.com/en-global/managing-your-trip/baggage-information/carry-on-baggage/",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "FLY58",
    "name": "Flybe",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 35,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "FLY59",
    "name": "Flydubai",
    "iata": "FZ",
    "country": "AE",
    "alliance": null,
    "region": "Middle East",
    "website": "https://www.flydubai.com/en/plan/baggage/hand-baggage",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 55,
            "width": 38,
            "height": 20,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "GULAIR",
    "name": "Gulf Air",
    "iata": "GF",
    "country": "BH",
    "alliance": null,
    "region": "Middle East",
    "website": "https://www.gulfair.com/before-you-fly/baggage-information",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 45,
            "width": 40,
            "height": 30,
            "unit": "cm"
          },
          "weight": {
            "value": 6,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "HONKONAI",
    "name": "Hong Kong Airlines",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.hongkongairlines.com/en_HK/flying/info/baggage",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "JET62",
    "name": "Jetstar",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.jetstar.com/au/en/help/articles/carry-on-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "LAOAIR",
    "name": "Lao Airlines",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.laoairlines.com/baggage-allowance/",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "MANAIR",
    "name": "Mango Airlines",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "NOK",
    "name": "NokAir",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.nokair.com/content/en/travel-information/baggage-allowance",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "PEA",
    "name": "Peach",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.flypeach.com/en/lm/ai/airports/baggage/carry_on",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "PHIAIR67",
    "name": "Philippines Airlines",
    "iata": "PR",
    "country": "PH",
    "alliance": null,
    "region": "Asia",
    "website": "https://www.philippineairlines.com/en/home/travel-essentials/baggage/hand-carry-baggage-allowance",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "PORAIR",
    "name": "Porter Airlines",
    "iata": "PD",
    "country": "CA",
    "alliance": null,
    "region": "North America",
    "website": "https://www.flyporter.com/en-ca/travel-information/baggage/carry-on",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 9,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "ROYJORAI",
    "name": "Royal Jordanian Airlines",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.rj.com/en/plan-your-trip/baggage-information/carry-on-luggage",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "SAUAIR",
    "name": "Saudia Airlines",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.saudia.com/before-flying/baggage-information/baggage-allowance",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "SCOAIR",
    "name": "Scoot Airlines",
    "iata": "TR",
    "country": "SG",
    "alliance": null,
    "region": "Asia",
    "website": "https://www.flyscoot.com/en/plan-your-trip/baggage/cabin-baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "SRILANAI",
    "name": "Sri Lankan Airlines",
    "iata": "UL",
    "country": "LK",
    "alliance": "oneworld",
    "region": "Asia",
    "website": "https://www.srilankan.com/en_uk/plan-and-book/baggage-allowance",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "VIRATLAI",
    "name": "Virgin Atlantic Airways",
    "iata": "VS",
    "country": "GB",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.virginatlantic.com/help/baggage/hand-baggage-allowance",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "XIAAIR",
    "name": "Xiamen Airlines",
    "iata": "",
    "country": "",
    "alliance": null,
    "region": "Global",
    "website": "https://www.xiamenair.com/en-us/travel-service/baggage/carry-on-baggage",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 36,
            "height": 23,
            "unit": "cm"
          },
          "weight": {
            "value": 5,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "EAS75",
    "name": "easyJet",
    "iata": "U2",
    "country": "GB",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.easyjet.com/en/help/baggage/cabin-bags-and-hold-luggage",
    "generosity": "generous",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 45,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 15,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "SMA",
    "name": "SmartWings",
    "iata": "QS",
    "country": "CZ",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.smartwings.com/en/baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 45,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 8,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "NORATLAI",
    "name": "Norse Atlantic Airways",
    "iata": "N0",
    "country": "NO",
    "alliance": null,
    "region": "Europe",
    "website": "https://www.flynorse.com/en/help/baggage",
    "generosity": "moderate",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 56,
            "width": 46,
            "height": 25,
            "unit": "cm"
          },
          "weight": {
            "value": 10,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "CAYAIR",
    "name": "Cayman Airways",
    "iata": "KX",
    "country": "KY",
    "alliance": null,
    "region": "North America",
    "website": "https://www.caymanairways.com/baggage-information",
    "generosity": "strict",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 61,
            "width": 41,
            "height": 28,
            "unit": "cm"
          },
          "weight": {
            "value": 7,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  },
  {
    "id": "SUNCOUAI",
    "name": "Sun Country Airlines",
    "iata": "SY",
    "country": "US",
    "alliance": null,
    "region": "North America",
    "website": "https://www.suncountry.com/baggage-policy",
    "generosity": "generous",
    "lastUpdated": "2026-04-29",
    "servesCountries": [],
    "baggage": {
      "economy": {
        "carryOn": {
          "dimensions": {
            "length": 61,
            "width": 41,
            "height": 28,
            "unit": "cm"
          },
          "weight": {
            "value": 16,
            "unit": "kg"
          },
          "quantity": 1,
          "freeIncluded": true
        },
        "personalItem": null,
        "checked": null
      },
      "business": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      },
      "first": {
        "carryOn": null,
        "personalItem": null,
        "checked": null
      }
    }
  }
];

export default airlines;