---
layout: page
title: ESP32-S3 小型機器人控制板
description: 基於ESP32-S3-WROOM-1U-N16R8所設計的高度整合控制板，集成步進馬達驅動、多種感測器接口和電源管理，專為Eurobot競賽設計。
img: assets/img/PCB_selfie.jpg # <-- 請替換成你的主要圖片路徑
importance: 1
category: Competition
related_publications: false
---

<!-- English Version Starts -->

## Project Overview

This is a custom-designed compact robot controller board based on the ESP32-S3-WROOM-1U-N16R8 MCU SoC with external antenna capability. Measuring only 81×59mm, this highly integrated board combines power management, motor control, and sensor interfaces in one package.

**Key Features:**

- ESP32-S3-WROOM-1U-N16R8 MCU SoC (dual-core 32-bit LX7 microprocessor, 16MB Flash, 8MB PSRAM)
- Integrated TMC2209 stepper motor driver interfaces for silent and precise motion control
- XL1583 buck converter and XL6008 boost converter for flexible power management
- Three VL53 distance sensor interfaces for obstacle detection
- Two servo motor outputs for mechanical actuators
- CP2102 USB-to-UART bridge for easy programming
- Auto-programming circuit for firmware updates
- External antenna support for improved wireless connectivity

The board is significantly more compact than commercial ESP32 development boards, eliminating unnecessary components while preserving all required functionality for small robot applications in competitive environments like Eurobot2025.

**Open Source Files:**
* **OSHWlab Repository:** [Project Link](https://oshwlab.com/q124498935/18V-pcb)

<!-- English Version Ends -->

---

## 專案簡介

這是一款基於ESP32-S3-WROOM-1U-N16R8模組的高度整合小型機器人控制板，專為Eurobot2025機器人競賽設計。在僅81mm×59mm的緊湊尺寸內，集成了完整的電源管理、馬達驅動、感測器接口和通訊功能，為競賽機器人提供強大而靈活的控制方案。

---

## 設計動機與目標

Eurobot競賽對機器人尺寸有嚴格限制，市售開發板往往體積過大且功能分散，無法滿足競賽需求。因此我設計了這款高度整合的控制板，將電源管理、處理器、驅動器等功能集中在一塊PCB上，不僅節省寶貴空間，還簡化了接線和組裝過程。

選用ESP32-S3-WROOM-1U-N16R8模組作為核心，主要考慮其強大的處理能力和外接天線功能，確保在競賽環境中保持穩定的無線通訊連接。

---

## 主要規格

- **處理器**：ESP32-S3雙核32位LX7微處理器，時脈高達240MHz
- **無線連接**：Wi-Fi 802.11b/g/n + 藍牙5.0 LE
- **記憶體**：16MB閃存 + 8MB PSRAM
- **天線**：外接天線接口(U.FL連接器)
- **尺寸**：81mm × 59mm
- **馬達驅動**：
  - 兩個TMC2209靜音步進馬達驅動器接口
  - 兩個步進馬達輸出接口
  - 兩個伺服馬達(Servo)接口
- **電源管理**：
  - XL1583降壓模組
  - XL6008升壓模組
- **感測器接口**：三個VL53距離感測器接口
- **其他功能**：
  - LED控制接口
  - Reset/Boot/User按鈕
  - CP2102通訊晶片
  - 自動燒錄電路

---

## 設計與製作過程

- **需求分析**：根據Eurobot競賽規則和機器人功能需求，確定控制板必要功能，我拿掉了其他常見的ESP開發板用不到的功能。
- **元件選型**：選擇ESP32-S3-WROOM-1U-N16R8模組作為核心，搭配TMC2209驅動器、XL1583/XL6008電源模組等，並且因為開發前期的不確定性，我選擇先送一版PCB的板子手動回流焊以測試電路的可行性。
- **電路設計**：設計電源管理、馬達驅動、感測器接口等電路。
- **PCB佈局**：在有限空間內優化元件佈局，確保信號完整性和散熱效果，並且與設計小機器人的同學討論其所需的大小。
- **製造與測試**：完成PCB製造、元件焊接，並進行功能測試和調整。

---

<div class="row justify-content-sm-center">
<div class="col-sm mt-3 mt-md-0">
{% include figure.liquid loading="eager" path="assets/img/sima_pcb_sch.png" title="控制板原理圖" class="img-fluid rounded z-depth-1" %}
</div>
<div class="col-sm mt-3 mt-md-0">
{% include figure.liquid loading="eager" path="assets/img/sima_pcb_layout.png" title="控制板PCB佈局" class="img-fluid rounded z-depth-1" %}
</div>
</div>
<div class="caption">
左：控制板原理圖。右：PCB佈局設計，優化空間利用。
</div>

---

<div class="row">
<div class="col-sm mt-3 mt-md-0">
{% include figure.liquid loading="eager" path="assets/img/sima_top.jpg" title="控制板正面實體圖" class="img-fluid rounded z-depth-1" %}
</div>
<div class="col-sm mt-3 mt-md-0">
{% include figure.liquid loading="eager" path="assets/img/sima_back.jpg" title="控制板背面實體圖" class="img-fluid rounded z-depth-1" %}
</div>
<div class="col-sm mt-3 mt-md-0">
{% include figure.liquid loading="eager" path="assets/img/sima_pcb_3d.png" title="控制板3D渲染圖" class="img-fluid rounded z-depth-1" %}
</div>
</div>
<div class="caption">
控制板正面、背面實體照片和3D渲染圖。
</div>

---

## 應用場景

這款控制板專為Eurobot機器人競賽設計，特別適合以下應用：

- **競賽機器人**：Eurobot等對尺寸有嚴格限制的機器人競賽
- **小型自主移動平台**：需要精確控制(我選擇步進馬達原因為我們的小機器人不需要太高的承重能力，但是我們需要它能夠以不需回授的方式仍能精準控制輪子轉動)和避障功能的移動機器人
- **教育和研究**：很適合用於機器人教學的小型平台

---

## 與商用方案比較

相比市面上的ESP32開發板，這款自製控制板具有以下優勢：

1. **高度整合**：集成電源管理、馬達驅動、感測器接口等多種功能，無需額外擴展板，表現會更穩定
2. **尺寸優化**：針對Eurobot競賽空間限制專門設計，尺寸僅81mm×59mm
3. **專用功能**：針對機器人應用優化，集成TMC2209驅動器和VL53感測器接口
4. **外接天線**：支持外接天線，提高通訊可靠性，解決機器人在競賽環境中可能面臨的訊號接收問題

---

## 挑戰與心得

- **空間限制**：在有限空間內集成多種功能，需要反覆優化佈局和走線
- **散熱考量**：TMC2209驅動器和電源模組需要良好散熱，佈局時需特別注意
- **信號完整度**：高速數位信號和電源線路需要合理分離，避免干擾
- **元件選型**：選擇合適的元件，平衡性能、尺寸和成本
- **學習經驗**：透過這個專案，深入學習了ESP32-S3的應用和PCB設計技巧，也更加認識ESP整個產品線的差異

---

## 未來展望

未來可考慮的改進方向包括：

- **增加更多感測器接口**：如陀螺儀、加速度計等，提升機器人的感知能力
- **優化電源管理**：提高能效，延長電池使用時間(目前使用步進馬達還是太耗電)
- **增加電機編碼器接口**：實現閉環控制，提高運動精度(如果需要負重的話，有回授的必要)
- **改進無線通訊**：探索更穩定的無線通訊方案，如LoRa或更高性能的WiFi模組(目前有時仍會連線不穩定)

---

## 開源資源

本專案已開源，包括原理圖、PCB設計文件和相關文檔，可通過以下連結獲取：

* **OSHWlab Repository:** [點此前往專案 OSHWlab 頁面](https://oshwlab.com/q124498935/2025_dit_sima_board)

---

