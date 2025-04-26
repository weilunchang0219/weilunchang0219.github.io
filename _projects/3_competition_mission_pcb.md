---
layout: page
title: STM32 F446RE Robot Mission Control Board
description: A compact, highly-integrated STM32F446RE-based controller for multi-servo, sensor, and MOSFET control, designed for robot applications.
img: assets/img/PCB_selfie.jpg # <-- 請替換成你的主要圖片路徑
importance: 1
category: Competition
related_publications: false
---

<!-- English Version Starts -->

## Project Overview

This is a custom-designed mission control board for robotics applications, featuring the powerful STM32F446RE microcontroller. With dimensions of only 80x86mm, this compact board can simultaneously control 18 servo motors, 4 MOSFETs with optocoupler protection, 3 MPXV7007DP pressure sensors, and 2 VL53 distance sensors.

**Key Features:**

- STM32F446RE MCU (180MHz ARM Cortex-M4, 512KB Flash, 128KB SRAM)
- 4-layer PCB design with all components on top side for cost-effective PCBA manufacturing
- Designed specifically for Eurobot competition robots where space and integration are important
- ST-Link V2 programming interface for firmware updates

The board significantly better than commercial development boards like NUCLEO F446RE in terms of space efficiency and integration, eliminating unnecessary components while preserving all required functionality for robot control applications.

<!-- English Version Ends -->

---

## 專案簡介

這是我為機器人專案設計的自製任務控制板，配合自製 XL4015 降壓陣列PCB使用，專為多制動器、多功能需求而打造。控制板尺寸僅 80x86mm，卻能同時驅動 18 路伺服、4 路 MOSFET、3 路氣壓感測器與 2 路 VL53 距離感測器，並整合光耦保護，適合Eurobot競賽型機器人。

---

## 設計動機與目標

市售開發板（如 NUCLEO F446RE）雖然方便，但體積大且包含許多不必要元件，無法滿足機器人空間與整合度的需求。因此我決定設計一塊專屬於本機器人、功能高度整合且體積精巧的控制板，並搭配自製 XL4015 配電PCB，讓整體佈線更簡潔、供電更穩定。

---

## 主要規格

- **MCU**：STM32F446RE
- **尺寸**：80mm x 86mm
- **伺服控制**：18 路
- **MOSFET 控制**：4 路（LR7843 + PC817 光耦隔離）
- **氣壓感測器**：3 路 MPXV7007DP
- **距離感測器**：2 路 VL53
- **電源**：由自製 XL4015 配電板多路供電
- **佈線**：四層板設計，所有元件集中於正面
- **量產方式**：JLCPCB PCBA 代工
- **其他**：預留 ST-Link V2 燒錄介面

---

## 設計與製作過程

- **參考資料**：主要依據官方 datasheet 及最小系統板設計。
- **空間壓縮**：為節省成本與空間，所有元件集中於正面，並採用四層板（四層板成本僅略高於雙層板）。
- **手動佈線**：自動佈線功能有限，需手動佈線數十條，特別是大電流與訊號線需分離，避免干擾。
- **PCBA 生產**：考量到單面與雙面代焊價格差異，選擇單面佈局，並交由 JLCPCB PCBA 量產，提升焊接品質。
- **散熱與可靠性**：大電流路徑加寬、鋪銅、優化元件擺放，確保穩定與散熱。

---

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mission_pcb_sch.png" title="部分控制板原理圖" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mission_pcb_layout.png" title="控制板 PCB 佈線圖" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    左：部分原理圖。右：四層板佈線圖，所有元件集中於正面。
</div>

---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mission_pcb_top.jpg" title="控制板正面實體圖" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mission_pcb_back.jpg" title="控制板背面實體圖" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/PCB_selfie.jpg" title="我第一次的手工回流焊接紀念照" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    控制板正面、背面(完全無元件)與我第一次完成手工回流焊接的照片。
</div>

---

## 挑戰與心得

- **高密度佈局**：在有限空間內塞入大量元件，需不斷嘗試與優化。
- **成本控制**：單面 PCBA 省下大量製造成本。
- **手動佈線**：為保證大電流與訊號線隔離，需手動調整走線。
- **可靠性驗證**：很可靠，畢竟是機器自動焊接的。
- **軟體測試**：我雖不負責韌體程式開發，但會撰寫簡易測試程式驗證硬體功能。

---

## 與 NUCLEO 擴充板比較

- **體積優勢**：自製板大幅縮小體積，節省寶貴空間。
- **高度整合**：只整合需要的元件，去除冗餘，提升穩定性且更容易debug。
- **彈性更高**：可根據需求調整介面與功能。

---

## 未來展望

- **進一步優化走線**
- **考慮整合XL4015陣列PCB的電壓/電流監控功能**

---

## 開源檔案與設計資料

我已經將此專案的設計檔案(包含 EasyEDA Pro 原理圖、PCB Layout) 開源，歡迎參考與交流，也提供DIT實驗室的學弟妹們參考：

* **OSHWlab Repository:** [點此前往專案 OSHWlab 頁面](https://oshwlab.com/q124498935/18V-pcb)

---

這塊自製任務控制板配合自製 XL4015 配電板，讓機器人供電與控制系統高度整合且，很適合緊湊的機構設計。

---