// Single source of truth mock data for ARDD Tripura
import { District, CurrentUser, Subdivision, Block, AggregatedMetrics, Scope, SubUnitPerformance, MonthlyTrend } from '@/types/ardd';

export const mockDistricts: District[] = [
  {
    "id": "dist-west-tripura",
    "name": "West Tripura",
    "subdivisions": [
      {
        "id": "sub-sadar",
        "name": "Sadar Subdivision",
        "districtId": "dist-west-tripura",
        "blocks": [
          {
            "id": "blk-dukli",
            "name": "Dukli Block",
            "subdivisionId": "sub-sadar",
            "districtId": "dist-west-tripura",
            "metrics": {
              "cattleCount": 14200,
              "buffaloCount": 820,
              "goatSheepCount": 9500,
              "poultryCount": 48000,
              "vaccinationsDone": 13800,
              "vaccinationTarget": 15000,
              "artificialInseminations": 1250,
              "milkProductionLitersDay": 18500,
              "veterinaryCampsOrganized": 14,
              "schemeBeneficiaries": 620,
              "diseaseAlerts": 0,
              "monthlyTrends": [
                {
                  "month": "Mar",
                  "vaccinations": 2070,
                  "inseminations": 188,
                  "milkLiters": 17020
                },
                {
                  "month": "Apr",
                  "vaccinations": 2208,
                  "inseminations": 200,
                  "milkLiters": 17575
                },
                {
                  "month": "May",
                  "vaccinations": 2484,
                  "inseminations": 213,
                  "milkLiters": 18130
                },
                {
                  "month": "Jun",
                  "vaccinations": 2208,
                  "inseminations": 200,
                  "milkLiters": 17760
                },
                {
                  "month": "Jul",
                  "vaccinations": 2346,
                  "inseminations": 225,
                  "milkLiters": 18315
                },
                {
                  "month": "Aug",
                  "vaccinations": 2484,
                  "inseminations": 225,
                  "milkLiters": 18500
                }
              ]
            }
          },
          {
            "id": "blk-bamutia",
            "name": "Bamutia Block",
            "subdivisionId": "sub-sadar",
            "districtId": "dist-west-tripura",
            "metrics": {
              "cattleCount": 11800,
              "buffaloCount": 610,
              "goatSheepCount": 7800,
              "poultryCount": 39000,
              "vaccinationsDone": 10900,
              "vaccinationTarget": 12500,
              "artificialInseminations": 980,
              "milkProductionLitersDay": 14200,
              "veterinaryCampsOrganized": 11,
              "schemeBeneficiaries": 490,
              "diseaseAlerts": 1,
              "monthlyTrends": [
                {
                  "month": "Mar",
                  "vaccinations": 1635,
                  "inseminations": 147,
                  "milkLiters": 13064
                },
                {
                  "month": "Apr",
                  "vaccinations": 1744,
                  "inseminations": 157,
                  "milkLiters": 13490
                },
                {
                  "month": "May",
                  "vaccinations": 1962,
                  "inseminations": 167,
                  "milkLiters": 13916
                },
                {
                  "month": "Jun",
                  "vaccinations": 1744,
                  "inseminations": 157,
                  "milkLiters": 13632
                },
                {
                  "month": "Jul",
                  "vaccinations": 1853,
                  "inseminations": 176,
                  "milkLiters": 14058
                },
                {
                  "month": "Aug",
                  "vaccinations": 1962,
                  "inseminations": 176,
                  "milkLiters": 14200
                }
              ]
            }
          },
          {
            "id": "blk-hezamara",
            "name": "Hezamara Block",
            "subdivisionId": "sub-sadar",
            "districtId": "dist-west-tripura",
            "metrics": {
              "cattleCount": 9600,
              "buffaloCount": 430,
              "goatSheepCount": 6400,
              "poultryCount": 32000,
              "vaccinationsDone": 8900,
              "vaccinationTarget": 10000,
              "artificialInseminations": 760,
              "milkProductionLitersDay": 11800,
              "veterinaryCampsOrganized": 8,
              "schemeBeneficiaries": 380,
              "diseaseAlerts": 0,
              "monthlyTrends": [
                {
                  "month": "Mar",
                  "vaccinations": 1335,
                  "inseminations": 114,
                  "milkLiters": 10856
                },
                {
                  "month": "Apr",
                  "vaccinations": 1424,
                  "inseminations": 122,
                  "milkLiters": 11210
                },
                {
                  "month": "May",
                  "vaccinations": 1602,
                  "inseminations": 129,
                  "milkLiters": 11564
                },
                {
                  "month": "Jun",
                  "vaccinations": 1424,
                  "inseminations": 122,
                  "milkLiters": 11328
                },
                {
                  "month": "Jul",
                  "vaccinations": 1513,
                  "inseminations": 137,
                  "milkLiters": 11682
                },
                {
                  "month": "Aug",
                  "vaccinations": 1602,
                  "inseminations": 137,
                  "milkLiters": 11800
                }
              ]
            }
          }
        ]
      },
      {
        "id": "sub-mohanpur",
        "name": "Mohanpur Subdivision",
        "districtId": "dist-west-tripura",
        "blocks": [
          {
            "id": "blk-mohanpur",
            "name": "Mohanpur Block",
            "subdivisionId": "sub-mohanpur",
            "districtId": "dist-west-tripura",
            "metrics": {
              "cattleCount": 13400,
              "buffaloCount": 710,
              "goatSheepCount": 8900,
              "poultryCount": 44000,
              "vaccinationsDone": 12800,
              "vaccinationTarget": 14000,
              "artificialInseminations": 1120,
              "milkProductionLitersDay": 16700,
              "veterinaryCampsOrganized": 12,
              "schemeBeneficiaries": 540,
              "diseaseAlerts": 0,
              "monthlyTrends": [
                {
                  "month": "Mar",
                  "vaccinations": 1920,
                  "inseminations": 168,
                  "milkLiters": 15364
                },
                {
                  "month": "Apr",
                  "vaccinations": 2048,
                  "inseminations": 179,
                  "milkLiters": 15865
                },
                {
                  "month": "May",
                  "vaccinations": 2304,
                  "inseminations": 190,
                  "milkLiters": 16366
                },
                {
                  "month": "Jun",
                  "vaccinations": 2048,
                  "inseminations": 179,
                  "milkLiters": 16032
                },
                {
                  "month": "Jul",
                  "vaccinations": 2176,
                  "inseminations": 202,
                  "milkLiters": 16533
                },
                {
                  "month": "Aug",
                  "vaccinations": 2304,
                  "inseminations": 202,
                  "milkLiters": 16700
                }
              ]
            }
          },
          {
            "id": "blk-lefunga",
            "name": "Lefunga Block",
            "subdivisionId": "sub-mohanpur",
            "districtId": "dist-west-tripura",
            "metrics": {
              "cattleCount": 8700,
              "buffaloCount": 390,
              "goatSheepCount": 5800,
              "poultryCount": 29000,
              "vaccinationsDone": 7950,
              "vaccinationTarget": 9200,
              "artificialInseminations": 640,
              "milkProductionLitersDay": 9800,
              "veterinaryCampsOrganized": 7,
              "schemeBeneficiaries": 310,
              "diseaseAlerts": 0,
              "monthlyTrends": [
                {
                  "month": "Mar",
                  "vaccinations": 1193,
                  "inseminations": 96,
                  "milkLiters": 9016
                },
                {
                  "month": "Apr",
                  "vaccinations": 1272,
                  "inseminations": 102,
                  "milkLiters": 9310
                },
                {
                  "month": "May",
                  "vaccinations": 1431,
                  "inseminations": 109,
                  "milkLiters": 9604
                },
                {
                  "month": "Jun",
                  "vaccinations": 1272,
                  "inseminations": 102,
                  "milkLiters": 9408
                },
                {
                  "month": "Jul",
                  "vaccinations": 1352,
                  "inseminations": 115,
                  "milkLiters": 9702
                },
                {
                  "month": "Aug",
                  "vaccinations": 1431,
                  "inseminations": 115,
                  "milkLiters": 9800
                }
              ]
            }
          }
        ]
      },
      {
        "id": "sub-jirania",
        "name": "Jirania Subdivision",
        "districtId": "dist-west-tripura",
        "blocks": [
          {
            "id": "blk-jirania",
            "name": "Jirania Block",
            "subdivisionId": "sub-jirania",
            "districtId": "dist-west-tripura",
            "metrics": {
              "cattleCount": 12900,
              "buffaloCount": 680,
              "goatSheepCount": 8400,
              "poultryCount": 41000,
              "vaccinationsDone": 12100,
              "vaccinationTarget": 13500,
              "artificialInseminations": 1060,
              "milkProductionLitersDay": 15400,
              "veterinaryCampsOrganized": 10,
              "schemeBeneficiaries": 510,
              "diseaseAlerts": 0,
              "monthlyTrends": [
                {
                  "month": "Mar",
                  "vaccinations": 1815,
                  "inseminations": 159,
                  "milkLiters": 14168
                },
                {
                  "month": "Apr",
                  "vaccinations": 1936,
                  "inseminations": 170,
                  "milkLiters": 14630
                },
                {
                  "month": "May",
                  "vaccinations": 2178,
                  "inseminations": 180,
                  "milkLiters": 15092
                },
                {
                  "month": "Jun",
                  "vaccinations": 1936,
                  "inseminations": 170,
                  "milkLiters": 14784
                },
                {
                  "month": "Jul",
                  "vaccinations": 2057,
                  "inseminations": 191,
                  "milkLiters": 15246
                },
                {
                  "month": "Aug",
                  "vaccinations": 2178,
                  "inseminations": 191,
                  "milkLiters": 15400
                }
              ]
            }
          },
          {
            "id": "blk-mandwi",
            "name": "Mandwi Block",
            "subdivisionId": "sub-jirania",
            "districtId": "dist-west-tripura",
            "metrics": {
              "cattleCount": 9200,
              "buffaloCount": 410,
              "goatSheepCount": 6100,
              "poultryCount": 31000,
              "vaccinationsDone": 8400,
              "vaccinationTarget": 9600,
              "artificialInseminations": 690,
              "milkProductionLitersDay": 10500,
              "veterinaryCampsOrganized": 8,
              "schemeBeneficiaries": 340,
              "diseaseAlerts": 0,
              "monthlyTrends": [
                {
                  "month": "Mar",
                  "vaccinations": 1260,
                  "inseminations": 104,
                  "milkLiters": 9660
                },
                {
                  "month": "Apr",
                  "vaccinations": 1344,
                  "inseminations": 110,
                  "milkLiters": 9975
                },
                {
                  "month": "May",
                  "vaccinations": 1512,
                  "inseminations": 117,
                  "milkLiters": 10290
                },
                {
                  "month": "Jun",
                  "vaccinations": 1344,
                  "inseminations": 110,
                  "milkLiters": 10080
                },
                {
                  "month": "Jul",
                  "vaccinations": 1428,
                  "inseminations": 124,
                  "milkLiters": 10395
                },
                {
                  "month": "Aug",
                  "vaccinations": 1512,
                  "inseminations": 124,
                  "milkLiters": 10500
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "dist-gomati",
    "name": "Gomati District",
    "subdivisions": [
      {
        "id": "sub-udaipur",
        "name": "Udaipur Subdivision",
        "districtId": "dist-gomati",
        "blocks": [
          {
            "id": "blk-matabari",
            "name": "Matabari Block",
            "subdivisionId": "sub-udaipur",
            "districtId": "dist-gomati",
            "metrics": {
              "cattleCount": 15600,
              "buffaloCount": 920,
              "goatSheepCount": 10200,
              "poultryCount": 52000,
              "vaccinationsDone": 14900,
              "vaccinationTarget": 16000,
              "artificialInseminations": 1380,
              "milkProductionLitersDay": 20200,
              "veterinaryCampsOrganized": 16,
              "schemeBeneficiaries": 710,
              "diseaseAlerts": 0,
              "monthlyTrends": [
                {
                  "month": "Mar",
                  "vaccinations": 2235,
                  "inseminations": 207,
                  "milkLiters": 18584
                },
                {
                  "month": "Apr",
                  "vaccinations": 2384,
                  "inseminations": 221,
                  "milkLiters": 19190
                },
                {
                  "month": "May",
                  "vaccinations": 2682,
                  "inseminations": 235,
                  "milkLiters": 19796
                },
                {
                  "month": "Jun",
                  "vaccinations": 2384,
                  "inseminations": 221,
                  "milkLiters": 19392
                },
                {
                  "month": "Jul",
                  "vaccinations": 2533,
                  "inseminations": 248,
                  "milkLiters": 19998
                },
                {
                  "month": "Aug",
                  "vaccinations": 2682,
                  "inseminations": 248,
                  "milkLiters": 20200
                }
              ]
            }
          },
          {
            "id": "blk-kakraban",
            "name": "Kakraban Block",
            "subdivisionId": "sub-udaipur",
            "districtId": "dist-gomati",
            "metrics": {
              "cattleCount": 12100,
              "buffaloCount": 650,
              "goatSheepCount": 8100,
              "poultryCount": 40500,
              "vaccinationsDone": 11400,
              "vaccinationTarget": 12800,
              "artificialInseminations": 1010,
              "milkProductionLitersDay": 14800,
              "veterinaryCampsOrganized": 11,
              "schemeBeneficiaries": 480,
              "diseaseAlerts": 0,
              "monthlyTrends": [
                {
                  "month": "Mar",
                  "vaccinations": 1710,
                  "inseminations": 152,
                  "milkLiters": 13616
                },
                {
                  "month": "Apr",
                  "vaccinations": 1824,
                  "inseminations": 162,
                  "milkLiters": 14060
                },
                {
                  "month": "May",
                  "vaccinations": 2052,
                  "inseminations": 172,
                  "milkLiters": 14504
                },
                {
                  "month": "Jun",
                  "vaccinations": 1824,
                  "inseminations": 162,
                  "milkLiters": 14208
                },
                {
                  "month": "Jul",
                  "vaccinations": 1938,
                  "inseminations": 182,
                  "milkLiters": 14652
                },
                {
                  "month": "Aug",
                  "vaccinations": 2052,
                  "inseminations": 182,
                  "milkLiters": 14800
                }
              ]
            }
          },
          {
            "id": "blk-killa",
            "name": "Killa Block",
            "subdivisionId": "sub-udaipur",
            "districtId": "dist-gomati",
            "metrics": {
              "cattleCount": 8900,
              "buffaloCount": 380,
              "goatSheepCount": 5900,
              "poultryCount": 28000,
              "vaccinationsDone": 8100,
              "vaccinationTarget": 9500,
              "artificialInseminations": 670,
              "milkProductionLitersDay": 10100,
              "veterinaryCampsOrganized": 7,
              "schemeBeneficiaries": 320,
              "diseaseAlerts": 0,
              "monthlyTrends": [
                {
                  "month": "Mar",
                  "vaccinations": 1215,
                  "inseminations": 101,
                  "milkLiters": 9292
                },
                {
                  "month": "Apr",
                  "vaccinations": 1296,
                  "inseminations": 107,
                  "milkLiters": 9595
                },
                {
                  "month": "May",
                  "vaccinations": 1458,
                  "inseminations": 114,
                  "milkLiters": 9898
                },
                {
                  "month": "Jun",
                  "vaccinations": 1296,
                  "inseminations": 107,
                  "milkLiters": 9696
                },
                {
                  "month": "Jul",
                  "vaccinations": 1377,
                  "inseminations": 121,
                  "milkLiters": 9999
                },
                {
                  "month": "Aug",
                  "vaccinations": 1458,
                  "inseminations": 121,
                  "milkLiters": 10100
                }
              ]
            }
          }
        ]
      },
      {
        "id": "sub-amarpur",
        "name": "Amarpur Subdivision",
        "districtId": "dist-gomati",
        "blocks": [
          {
            "id": "blk-amarpur",
            "name": "Amarpur Block",
            "subdivisionId": "sub-amarpur",
            "districtId": "dist-gomati",
            "metrics": {
              "cattleCount": 11200,
              "buffaloCount": 580,
              "goatSheepCount": 7400,
              "poultryCount": 37000,
              "vaccinationsDone": 10200,
              "vaccinationTarget": 11800,
              "artificialInseminations": 890,
              "milkProductionLitersDay": 13200,
              "veterinaryCampsOrganized": 9,
              "schemeBeneficiaries": 430,
              "diseaseAlerts": 0,
              "monthlyTrends": [
                {
                  "month": "Mar",
                  "vaccinations": 1530,
                  "inseminations": 134,
                  "milkLiters": 12144
                },
                {
                  "month": "Apr",
                  "vaccinations": 1632,
                  "inseminations": 142,
                  "milkLiters": 12540
                },
                {
                  "month": "May",
                  "vaccinations": 1836,
                  "inseminations": 151,
                  "milkLiters": 12936
                },
                {
                  "month": "Jun",
                  "vaccinations": 1632,
                  "inseminations": 142,
                  "milkLiters": 12672
                },
                {
                  "month": "Jul",
                  "vaccinations": 1734,
                  "inseminations": 160,
                  "milkLiters": 13068
                },
                {
                  "month": "Aug",
                  "vaccinations": 1836,
                  "inseminations": 160,
                  "milkLiters": 13200
                }
              ]
            }
          },
          {
            "id": "blk-ompi",
            "name": "Ompi Block",
            "subdivisionId": "sub-amarpur",
            "districtId": "dist-gomati",
            "metrics": {
              "cattleCount": 7600,
              "buffaloCount": 310,
              "goatSheepCount": 5100,
              "poultryCount": 24500,
              "vaccinationsDone": 6800,
              "vaccinationTarget": 8000,
              "artificialInseminations": 520,
              "milkProductionLitersDay": 8400,
              "veterinaryCampsOrganized": 6,
              "schemeBeneficiaries": 260,
              "diseaseAlerts": 0,
              "monthlyTrends": [
                {
                  "month": "Mar",
                  "vaccinations": 1020,
                  "inseminations": 78,
                  "milkLiters": 7728
                },
                {
                  "month": "Apr",
                  "vaccinations": 1088,
                  "inseminations": 83,
                  "milkLiters": 7980
                },
                {
                  "month": "May",
                  "vaccinations": 1224,
                  "inseminations": 88,
                  "milkLiters": 8232
                },
                {
                  "month": "Jun",
                  "vaccinations": 1088,
                  "inseminations": 83,
                  "milkLiters": 8064
                },
                {
                  "month": "Jul",
                  "vaccinations": 1156,
                  "inseminations": 94,
                  "milkLiters": 8316
                },
                {
                  "month": "Aug",
                  "vaccinations": 1224,
                  "inseminations": 94,
                  "milkLiters": 8400
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "dist-south-tripura",
    "name": "South Tripura",
    "subdivisions": [
      {
        "id": "sub-belonia",
        "name": "Belonia Subdivision",
        "districtId": "dist-south-tripura",
        "blocks": [
          {
            "id": "blk-rajnagar",
            "name": "Rajnagar Block",
            "subdivisionId": "sub-belonia",
            "districtId": "dist-south-tripura",
            "metrics": {
              "cattleCount": 13800,
              "buffaloCount": 790,
              "goatSheepCount": 9100,
              "poultryCount": 46000,
              "vaccinationsDone": 13200,
              "vaccinationTarget": 14500,
              "artificialInseminations": 1190,
              "milkProductionLitersDay": 17800,
              "veterinaryCampsOrganized": 13,
              "schemeBeneficiaries": 590,
              "diseaseAlerts": 0,
              "monthlyTrends": [
                {
                  "month": "Mar",
                  "vaccinations": 1980,
                  "inseminations": 179,
                  "milkLiters": 16376
                },
                {
                  "month": "Apr",
                  "vaccinations": 2112,
                  "inseminations": 190,
                  "milkLiters": 16910
                },
                {
                  "month": "May",
                  "vaccinations": 2376,
                  "inseminations": 202,
                  "milkLiters": 17444
                },
                {
                  "month": "Jun",
                  "vaccinations": 2112,
                  "inseminations": 190,
                  "milkLiters": 17088
                },
                {
                  "month": "Jul",
                  "vaccinations": 2244,
                  "inseminations": 214,
                  "milkLiters": 17622
                },
                {
                  "month": "Aug",
                  "vaccinations": 2376,
                  "inseminations": 214,
                  "milkLiters": 17800
                }
              ]
            }
          },
          {
            "id": "blk-hrishyamukh",
            "name": "Hrishyamukh Block",
            "subdivisionId": "sub-belonia",
            "districtId": "dist-south-tripura",
            "metrics": {
              "cattleCount": 10400,
              "buffaloCount": 520,
              "goatSheepCount": 6900,
              "poultryCount": 35000,
              "vaccinationsDone": 9600,
              "vaccinationTarget": 11000,
              "artificialInseminations": 820,
              "milkProductionLitersDay": 12400,
              "veterinaryCampsOrganized": 9,
              "schemeBeneficiaries": 410,
              "diseaseAlerts": 0,
              "monthlyTrends": [
                {
                  "month": "Mar",
                  "vaccinations": 1440,
                  "inseminations": 123,
                  "milkLiters": 11408
                },
                {
                  "month": "Apr",
                  "vaccinations": 1536,
                  "inseminations": 131,
                  "milkLiters": 11780
                },
                {
                  "month": "May",
                  "vaccinations": 1728,
                  "inseminations": 139,
                  "milkLiters": 12152
                },
                {
                  "month": "Jun",
                  "vaccinations": 1536,
                  "inseminations": 131,
                  "milkLiters": 11904
                },
                {
                  "month": "Jul",
                  "vaccinations": 1632,
                  "inseminations": 148,
                  "milkLiters": 12276
                },
                {
                  "month": "Aug",
                  "vaccinations": 1728,
                  "inseminations": 148,
                  "milkLiters": 12400
                }
              ]
            }
          }
        ]
      },
      {
        "id": "sub-santirbazar",
        "name": "Santirbazar Subdivision",
        "districtId": "dist-south-tripura",
        "blocks": [
          {
            "id": "blk-bokafa",
            "name": "Bokafa Block",
            "subdivisionId": "sub-santirbazar",
            "districtId": "dist-south-tripura",
            "metrics": {
              "cattleCount": 11500,
              "buffaloCount": 610,
              "goatSheepCount": 7600,
              "poultryCount": 38500,
              "vaccinationsDone": 10600,
              "vaccinationTarget": 12000,
              "artificialInseminations": 930,
              "milkProductionLitersDay": 13900,
              "veterinaryCampsOrganized": 10,
              "schemeBeneficiaries": 460,
              "diseaseAlerts": 0,
              "monthlyTrends": [
                {
                  "month": "Mar",
                  "vaccinations": 1590,
                  "inseminations": 140,
                  "milkLiters": 12788
                },
                {
                  "month": "Apr",
                  "vaccinations": 1696,
                  "inseminations": 149,
                  "milkLiters": 13205
                },
                {
                  "month": "May",
                  "vaccinations": 1908,
                  "inseminations": 158,
                  "milkLiters": 13622
                },
                {
                  "month": "Jun",
                  "vaccinations": 1696,
                  "inseminations": 149,
                  "milkLiters": 13344
                },
                {
                  "month": "Jul",
                  "vaccinations": 1802,
                  "inseminations": 167,
                  "milkLiters": 13761
                },
                {
                  "month": "Aug",
                  "vaccinations": 1908,
                  "inseminations": 167,
                  "milkLiters": 13900
                }
              ]
            }
          },
          {
            "id": "blk-jolaibari",
            "name": "Jolaibari Block",
            "subdivisionId": "sub-santirbazar",
            "districtId": "dist-south-tripura",
            "metrics": {
              "cattleCount": 8800,
              "buffaloCount": 420,
              "goatSheepCount": 5700,
              "poultryCount": 29500,
              "vaccinationsDone": 8050,
              "vaccinationTarget": 9300,
              "artificialInseminations": 680,
              "milkProductionLitersDay": 10200,
              "veterinaryCampsOrganized": 7,
              "schemeBeneficiaries": 330,
              "diseaseAlerts": 0,
              "monthlyTrends": [
                {
                  "month": "Mar",
                  "vaccinations": 1208,
                  "inseminations": 102,
                  "milkLiters": 9384
                },
                {
                  "month": "Apr",
                  "vaccinations": 1288,
                  "inseminations": 109,
                  "milkLiters": 9690
                },
                {
                  "month": "May",
                  "vaccinations": 1449,
                  "inseminations": 116,
                  "milkLiters": 9996
                },
                {
                  "month": "Jun",
                  "vaccinations": 1288,
                  "inseminations": 109,
                  "milkLiters": 9792
                },
                {
                  "month": "Jul",
                  "vaccinations": 1369,
                  "inseminations": 122,
                  "milkLiters": 10098
                },
                {
                  "month": "Aug",
                  "vaccinations": 1449,
                  "inseminations": 122,
                  "milkLiters": 10200
                }
              ]
            }
          }
        ]
      },
      {
        "id": "sub-empty-demo",
        "name": "Sabroom Special Zone (Demo Empty)",
        "districtId": "dist-south-tripura",
        "blocks": []
      }
    ]
  },
  {
    "id": "dist-dhalai",
    "name": "Dhalai District",
    "subdivisions": [
      {
        "id": "sub-ambassa",
        "name": "Ambassa Subdivision",
        "districtId": "dist-dhalai",
        "blocks": [
          {
            "id": "blk-ambassa",
            "name": "Ambassa Block",
            "subdivisionId": "sub-ambassa",
            "districtId": "dist-dhalai",
            "metrics": {
              "cattleCount": 9800,
              "buffaloCount": 450,
              "goatSheepCount": 6500,
              "poultryCount": 33000,
              "vaccinationsDone": 8900,
              "vaccinationTarget": 10200,
              "artificialInseminations": 740,
              "milkProductionLitersDay": 11200,
              "veterinaryCampsOrganized": 8,
              "schemeBeneficiaries": 370,
              "diseaseAlerts": 0,
              "monthlyTrends": [
                {
                  "month": "Mar",
                  "vaccinations": 1335,
                  "inseminations": 111,
                  "milkLiters": 10304
                },
                {
                  "month": "Apr",
                  "vaccinations": 1424,
                  "inseminations": 118,
                  "milkLiters": 10640
                },
                {
                  "month": "May",
                  "vaccinations": 1602,
                  "inseminations": 126,
                  "milkLiters": 10976
                },
                {
                  "month": "Jun",
                  "vaccinations": 1424,
                  "inseminations": 118,
                  "milkLiters": 10752
                },
                {
                  "month": "Jul",
                  "vaccinations": 1513,
                  "inseminations": 133,
                  "milkLiters": 11088
                },
                {
                  "month": "Aug",
                  "vaccinations": 1602,
                  "inseminations": 133,
                  "milkLiters": 11200
                }
              ]
            }
          },
          {
            "id": "blk-salema",
            "name": "Salema Block",
            "subdivisionId": "sub-ambassa",
            "districtId": "dist-dhalai",
            "metrics": {
              "cattleCount": 8400,
              "buffaloCount": 390,
              "goatSheepCount": 5400,
              "poultryCount": 28000,
              "vaccinationsDone": 7600,
              "vaccinationTarget": 8900,
              "artificialInseminations": 610,
              "milkProductionLitersDay": 9600,
              "veterinaryCampsOrganized": 7,
              "schemeBeneficiaries": 300,
              "diseaseAlerts": 0,
              "monthlyTrends": [
                {
                  "month": "Mar",
                  "vaccinations": 1140,
                  "inseminations": 92,
                  "milkLiters": 8832
                },
                {
                  "month": "Apr",
                  "vaccinations": 1216,
                  "inseminations": 98,
                  "milkLiters": 9120
                },
                {
                  "month": "May",
                  "vaccinations": 1368,
                  "inseminations": 104,
                  "milkLiters": 9408
                },
                {
                  "month": "Jun",
                  "vaccinations": 1216,
                  "inseminations": 98,
                  "milkLiters": 9216
                },
                {
                  "month": "Jul",
                  "vaccinations": 1292,
                  "inseminations": 110,
                  "milkLiters": 9504
                },
                {
                  "month": "Aug",
                  "vaccinations": 1368,
                  "inseminations": 110,
                  "milkLiters": 9600
                }
              ]
            }
          }
        ]
      },
      {
        "id": "sub-kamalpur",
        "name": "Kamalpur Subdivision",
        "districtId": "dist-dhalai",
        "blocks": [
          {
            "id": "blk-salema-north",
            "name": "Durga Chowmuhani Block",
            "subdivisionId": "sub-kamalpur",
            "districtId": "dist-dhalai",
            "metrics": {
              "cattleCount": 9100,
              "buffaloCount": 410,
              "goatSheepCount": 5900,
              "poultryCount": 30500,
              "vaccinationsDone": 8300,
              "vaccinationTarget": 9500,
              "artificialInseminations": 680,
              "milkProductionLitersDay": 10400,
              "veterinaryCampsOrganized": 8,
              "schemeBeneficiaries": 340,
              "diseaseAlerts": 0,
              "monthlyTrends": [
                {
                  "month": "Mar",
                  "vaccinations": 1245,
                  "inseminations": 102,
                  "milkLiters": 9568
                },
                {
                  "month": "Apr",
                  "vaccinations": 1328,
                  "inseminations": 109,
                  "milkLiters": 9880
                },
                {
                  "month": "May",
                  "vaccinations": 1494,
                  "inseminations": 116,
                  "milkLiters": 10192
                },
                {
                  "month": "Jun",
                  "vaccinations": 1328,
                  "inseminations": 109,
                  "milkLiters": 9984
                },
                {
                  "month": "Jul",
                  "vaccinations": 1411,
                  "inseminations": 122,
                  "milkLiters": 10296
                },
                {
                  "month": "Aug",
                  "vaccinations": 1494,
                  "inseminations": 122,
                  "milkLiters": 10400
                }
              ]
            }
          }
        ]
      }
    ]
  }
];

export const PRESET_USERS: CurrentUser[] = [
  {
    "id": "user-dist-west",
    "name": "Dr. Subhashish Debbarma",
    "designation": "District Veterinary Officer (DVO)",
    "role": "DistrictHead",
    "districtId": "dist-west-tripura",
    "email": "dvo.west@ardd.tripura.gov.in",
    "locationLabel": "West Tripura District (District-wide drilldown)"
  },
  {
    "id": "user-sub-sadar",
    "name": "Dr. Anamika Roy",
    "designation": "Subdivisional Veterinary Officer (SDVO)",
    "role": "SubdivisionHead",
    "districtId": "dist-west-tripura",
    "subdivisionId": "sub-sadar",
    "email": "sdvo.sadar@ardd.tripura.gov.in",
    "locationLabel": "Sadar Subdivision (Fixed subdivision, drill to Blocks)"
  },
  {
    "id": "user-blk-dukli",
    "name": "Dr. Rajesh Chakraborty",
    "designation": "Block Veterinary Officer (BVO)",
    "role": "BlockHead",
    "districtId": "dist-west-tripura",
    "subdivisionId": "sub-sadar",
    "blockId": "blk-dukli",
    "email": "bvo.dukli@ardd.tripura.gov.in",
    "locationLabel": "Dukli Block (Fixed Block — zero selectors)"
  },
  {
    "id": "user-mock-admin",
    "name": "Sri Prasenjit Bhowmik",
    "designation": "Directorate Systems Administrator",
    "role": "MockAdministrator",
    "email": "admin.ardd@tripura.gov.in",
    "locationLabel": "Directorate HQ, Agartala (Administration Module Only)"
  }
];

export const EMPTY_SUBDIVISION_USER: CurrentUser = {
  id: 'user-sub-empty',
  name: 'Dr. Ratan Sen',
  designation: 'Special Duty Officer',
  role: 'SubdivisionHead',
  districtId: 'dist-south-tripura',
  subdivisionId: 'sub-empty-demo',
  email: 'sdo.sabroom@ardd.tripura.gov.in',
  locationLabel: 'Sabroom Special Zone (Demo Empty Subdivision)'
};

// Pure scope filter functions (Guaranteed safe: never return undefined, return [] for unmatched)
export function getDistrictById(districtId?: string): District | undefined {
  if (!districtId) return undefined;
  return mockDistricts.find((d) => d.id === districtId);
}

export function getSubdivisionsForDistrict(districtId?: string): Subdivision[] {
  if (!districtId) return [];
  const dist = mockDistricts.find((d) => d.id === districtId);
  return dist?.subdivisions ?? [];
}

export function getBlocksForSubdivision(subdivisionId?: string): Block[] {
  if (!subdivisionId) return [];
  for (const dist of mockDistricts) {
    const sub = dist.subdivisions.find((s) => s.id === subdivisionId);
    if (sub) {
      return sub.blocks ?? [];
    }
  }
  return [];
}

export function getBlockById(blockId?: string): Block | undefined {
  if (!blockId) return undefined;
  for (const dist of mockDistricts) {
    for (const sub of dist.subdivisions) {
      const blk = sub.blocks.find((b) => b.id === blockId);
      if (blk) return blk;
    }
  }
  return undefined;
}

export function getSubdivisionById(subdivisionId?: string): Subdivision | undefined {
  if (!subdivisionId) return undefined;
  for (const dist of mockDistricts) {
    const sub = dist.subdivisions.find((s) => s.id === subdivisionId);
    if (sub) return sub;
  }
  return undefined;
}

export function getBlocksInScope(scope: Scope): Block[] {
  if (scope.blockId) {
    const blk = getBlockById(scope.blockId);
    return blk ? [blk] : [];
  }

  if (scope.subdivisionId) {
    return getBlocksForSubdivision(scope.subdivisionId);
  }

  if (scope.districtId) {
    const subdivisions = getSubdivisionsForDistrict(scope.districtId);
    return subdivisions.flatMap((sub) => sub.blocks ?? []);
  }

  return [];
}

export function aggregateMetricsForScope(scope: Scope): AggregatedMetrics {
  const blocks = getBlocksInScope(scope);

  const initialMonthly: MonthlyTrend[] = [
    { month: 'Mar', vaccinations: 0, inseminations: 0, milkLiters: 0 },
    { month: 'Apr', vaccinations: 0, inseminations: 0, milkLiters: 0 },
    { month: 'May', vaccinations: 0, inseminations: 0, milkLiters: 0 },
    { month: 'Jun', vaccinations: 0, inseminations: 0, milkLiters: 0 },
    { month: 'Jul', vaccinations: 0, inseminations: 0, milkLiters: 0 },
    { month: 'Aug', vaccinations: 0, inseminations: 0, milkLiters: 0 },
  ];

  if (blocks.length === 0) {
    return {
      totalLivestock: 0,
      cattleCount: 0,
      buffaloCount: 0,
      goatSheepCount: 0,
      poultryCount: 0,
      vaccinationsDone: 0,
      vaccinationTarget: 0,
      vaccinationCoveragePercent: 0,
      artificialInseminations: 0,
      milkProductionLitersDay: 0,
      veterinaryCampsOrganized: 0,
      schemeBeneficiaries: 0,
      diseaseAlerts: 0,
      totalBlocks: 0,
      totalSubdivisions: scope.subdivisionId ? 1 : (getDistrictById(scope.districtId)?.subdivisions.length ?? 0),
      monthlyTrends: initialMonthly,
    };
  }

  let cattleCount = 0;
  let buffaloCount = 0;
  let goatSheepCount = 0;
  let poultryCount = 0;
  let vaccinationsDone = 0;
  let vaccinationTarget = 0;
  let artificialInseminations = 0;
  let milkProductionLitersDay = 0;
  let veterinaryCampsOrganized = 0;
  let schemeBeneficiaries = 0;
  let diseaseAlerts = 0;

  const monthlyTotals = initialMonthly.map((m) => ({ ...m }));

  for (const block of blocks) {
    const m = block.metrics;
    cattleCount += m.cattleCount;
    buffaloCount += m.buffaloCount;
    goatSheepCount += m.goatSheepCount;
    poultryCount += m.poultryCount;
    vaccinationsDone += m.vaccinationsDone;
    vaccinationTarget += m.vaccinationTarget;
    artificialInseminations += m.artificialInseminations;
    milkProductionLitersDay += m.milkProductionLitersDay;
    veterinaryCampsOrganized += m.veterinaryCampsOrganized;
    schemeBeneficiaries += m.schemeBeneficiaries;
    diseaseAlerts += m.diseaseAlerts;

    if (m.monthlyTrends) {
      m.monthlyTrends.forEach((trend, idx) => {
        if (monthlyTotals[idx]) {
          monthlyTotals[idx].vaccinations += trend.vaccinations;
          monthlyTotals[idx].inseminations += trend.inseminations;
          monthlyTotals[idx].milkLiters += trend.milkLiters;
        }
      });
    }
  }

  const totalLivestock = cattleCount + buffaloCount + goatSheepCount + poultryCount;
  const vaccinationCoveragePercent = vaccinationTarget > 0 ? Math.round((vaccinationsDone / vaccinationTarget) * 100) : 0;

  const subCount = scope.blockId
    ? 1
    : scope.subdivisionId
    ? 1
    : (getDistrictById(scope.districtId)?.subdivisions.length ?? 0);

  return {
    totalLivestock,
    cattleCount,
    buffaloCount,
    goatSheepCount,
    poultryCount,
    vaccinationsDone,
    vaccinationTarget,
    vaccinationCoveragePercent,
    artificialInseminations,
    milkProductionLitersDay,
    veterinaryCampsOrganized,
    schemeBeneficiaries,
    diseaseAlerts,
    totalBlocks: blocks.length,
    totalSubdivisions: subCount,
    monthlyTrends: monthlyTotals,
  };
}

export function getSubUnitPerformance(scope: Scope): SubUnitPerformance[] {
  if (scope.level === 'District') {
    const subdivisions = getSubdivisionsForDistrict(scope.districtId);
    return subdivisions.map((sub) => {
      const subMetrics = aggregateMetricsForScope({
        level: 'Subdivision',
        districtId: scope.districtId,
        subdivisionId: sub.id,
      });
      return {
        id: sub.id,
        name: sub.name,
        type: 'Subdivision',
        cattleCount: subMetrics.cattleCount,
        vaccinationsDone: subMetrics.vaccinationsDone,
        vaccinationCoveragePercent: subMetrics.vaccinationCoveragePercent,
        artificialInseminations: subMetrics.artificialInseminations,
        milkProductionLitersDay: subMetrics.milkProductionLitersDay,
        diseaseAlerts: subMetrics.diseaseAlerts,
      };
    });
  }

  if (scope.level === 'Subdivision') {
    const blocks = getBlocksForSubdivision(scope.subdivisionId);
    return blocks.map((b) => ({
      id: b.id,
      name: b.name,
      type: 'Block',
      cattleCount: b.metrics.cattleCount,
      vaccinationsDone: b.metrics.vaccinationsDone,
      vaccinationCoveragePercent:
        b.metrics.vaccinationTarget > 0
          ? Math.round((b.metrics.vaccinationsDone / b.metrics.vaccinationTarget) * 100)
          : 0,
      artificialInseminations: b.metrics.artificialInseminations,
      milkProductionLitersDay: b.metrics.milkProductionLitersDay,
      diseaseAlerts: b.metrics.diseaseAlerts,
    }));
  }

  if (scope.level === 'Block') {
    const blk = getBlockById(scope.blockId);
    if (!blk) return [];
    const sub = getSubdivisionById(blk.subdivisionId);
    return [
      {
        id: blk.id,
        name: blk.name,
        type: 'Block',
        cattleCount: blk.metrics.cattleCount,
        vaccinationsDone: blk.metrics.vaccinationsDone,
        vaccinationCoveragePercent:
          blk.metrics.vaccinationTarget > 0
            ? Math.round((blk.metrics.vaccinationsDone / blk.metrics.vaccinationTarget) * 100)
            : 0,
        artificialInseminations: blk.metrics.artificialInseminations,
        milkProductionLitersDay: blk.metrics.milkProductionLitersDay,
        diseaseAlerts: blk.metrics.diseaseAlerts,
        subdivisionName: sub?.name,
      },
    ];
  }

  return [];
}

export function getScopeDisplayText(scope: Scope): { title: string; subtitle: string } {
  if (scope.level === 'Block') {
    const blk = getBlockById(scope.blockId);
    const sub = getSubdivisionById(blk?.subdivisionId);
    const dist = getDistrictById(blk?.districtId);
    return {
      title: blk?.name ?? 'Unknown Block',
      subtitle: (sub?.name || '') + ' • ' + (dist?.name || 'Tripura') + ' District',
    };
  }

  if (scope.level === 'Subdivision') {
    const sub = getSubdivisionById(scope.subdivisionId);
    const dist = getDistrictById(sub?.districtId);
    return {
      title: sub?.name ?? 'Unknown Subdivision',
      subtitle: (dist?.name || 'Tripura') + ' District',
    };
  }

  const dist = getDistrictById(scope.districtId);
  return {
    title: dist?.name ? dist.name + ' District' : 'District Overview',
    subtitle: 'State of Tripura • Animal Resources Development Department',
  };
}
