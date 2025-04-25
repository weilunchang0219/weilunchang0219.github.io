---
layout: page
title: Self-made XL4015 Buck Converter Array PCB
description: A customized power converter board for robots, featuring multi-output capability and emergency stop logic.
img: assets/img/xl4015_pcb_main.jpg # <-- 請替換成你的主要圖片路徑
importance: 1
category: Competition # <-- 你可以修改成 Hardware, Robotics, Power Electronics 等
related_publications: False # <-- 如果有相關連結請改為 true 並在文末補充
---


<!-- English Version Starts (Short) -->

## Project Overview

This project is a custom PCB power distribution board for a robot.

**Problem:** The robot needed multiple voltages (5V, 6V, 7.4V, 12V) from a single 18V battery. It also required an Emergency Stop (E-Stop) that *only* cuts power to motors/servos, not the main computer. Standard wiring for this would be very messy.

**Solution:** I designed a PCB integrating 8x XL4015 buck converters and the E-Stop logic.
*   **Outputs:** 5x 12V, 1x 7.4V, 1x 6V, 1x 5V (up to 5A each).
*   **Manufacturing:** Designed schematic/layout, board professionally made by JLCPCB.

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bucksch.png" title="Schematic" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bucklayout.png" title="PCB Layout" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Schematic and PCB layout design.
</div>

**Challenges & Learning:** Designing for high current required careful layout (trace widths, thickness of copper, etc).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/xl4015_pcb_main.jpg" title="PCB Top" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/xl4015_placeholder_pcb_bottom.jpg" title="PCB Bottom" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/xl4015_placeholder_pcb_installed.jpg" title="Installed" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The final PCB (Top, Bottom, Installed views).
</div>

**Results:** The board works reliably, provides stable voltages, and the E-Stop functions correctly. Efficiency is ~80-85%. Needs fans for cooling under heavy load.

**Open Source Files:**
*   **OSHWlab Repository:** [Project Link](https://oshwlab.com/q124498935/18V-pcb)

<!-- English Version Ends (Short) -->

--- <!-- Optional: Separator -->

<!-- Chinese Version Starts -->

## 專案動機與目標

在機器人設計中，我們經常面臨需要將單一電源 (例如 18V 工具電池) 轉換為多種不同電壓給各個致動器和感測器使用的情況。在這個專案中，我們的機器人需要 5V、6V、7.4V 和 12V 等多種電壓。此外，根據比賽的安全規範，我們必須實現一個緊急停止功能：當按下緊急開關時，所有致動器 (如馬達、伺服機) 必須立即斷電，但機載電腦、感測器、燈光等關鍵輔助系統則需維持運作。

若使用市售的獨立降壓模組並透過外部線路實現此複雜的開關邏輯，會導致接線極為繁雜且容易出錯。為了解決這個問題，並提高系統的整合度和可靠性，我決定設計並製作一塊客製化的 PCB 電源板。

這塊 PCB 的核心是整合了 8 個 XL4015 降壓轉換模組，並內建了所需的緊急停止開關邏輯，旨在提供穩定、可靠的多路電源輸出，同時簡化機器人內部的佈線。

## 技術規格與設計

* **輸入電壓:** 18V (來自工具機電池)
* **輸出通道配置:**
  * 5 路 12V 輸出
  * 1 路 7.4V 輸出
  * 1 路 6V 輸出
  * 1 路 5V 輸出
* **單通道最大設計電流:** 5A (根據 XL4015 Datasheet)
* **預估整體效率:** 約 80% ~ 85%
* **核心晶片:** 8x XL4015
* **特殊功能:** 內建緊急停止邏輯，可獨立切斷致動器電源。

設計過程中，我參考了 XL4015 的官方 Datasheet，並根據特定開關邏輯和供電需求繪製了電路原理圖與 PCB 佈局圖。

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bucksch.png" title="電路原理圖 (Schematic)" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bucklayout.png" title="PCB 佈局圖 (Layout)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    左側為電路原理圖，定義了元件連接與電源路徑。右側為 PCB 佈局圖，展示了元件的實際擺放位置與走線。
</div>

## 製作過程與挑戰

考量到此 PCB 涉及較大電流的操作，為了確保焊接品質與系統穩定性，避免因手工焊接失誤損壞昂貴的機器人硬體，我選擇委託專業的 PCB 製造商 (JLCPCB) 進行 PCBA (PCB Assembly) 的生產。

在 PCB Layout 設計階段，我深刻體會到經驗累積的重要性，尤其是在處理大電流路徑時。線寬的選擇、銅箔厚度、鋪銅策略以及散熱孔的設計都需要仔細考量。我們透過查閱 CSDN、Reddit 等技術論壇以及 AI 工具的輔助，學習了許多 PCB 佈局的技巧。

例如，初期在佈局時，未注意到在傳統插件式電感的正下方進行了大面積鋪銅，這可能會干擾電感值。經過修正，我改用了屏蔽式電感，以減少鋪銅層對其電感值的影響，提高電源轉換的穩定性與準確度。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/xl4015_pcb_main.jpg" title="PCB 正面實體圖" class="img-fluid rounded z-depth-1" %} 
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/xl4015_placeholder_pcb_bottom.jpg" title="PCB 背面實體圖" class="img-fluid rounded z-depth-1" %} 
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/xl4015_placeholder_pcb_installed.jpg" title="安裝於機器人之照片" class="img-fluid rounded z-depth-1" %} 
    </div>
</div>
<div class="caption">
    左：PCB 正面展示了 XL4015 模組、電感、電容等主要元件。中：PCB 背面可見大面積鋪銅以增強散熱和電流承載能力。右：實際將 PCB 安裝於機器人底盤上的情況。
</div>

## 成果與未來工作

這塊客製化的 XL4015 降壓轉換器陣列 PCB 成功地整合了多路電源輸出與緊急停止邏輯，有效解決了原先複雜的佈線問題，並提高了機器人電源系統的可靠性。

* **效能驗證:** 各路輸出在不同負載下的電壓穩定性極高，目前我製作了五塊板子，本想著可能整個賽季會弄壞不少塊，結果除了一塊是我自己正負極看錯外，目前板子已經使用了約三個月，整體非常穩定，都沒有壞掉。
* **效率測試:** 實際測量的轉換效率約為80-85%，略低於官方的93%。
* **散熱表現:** 在滿載測試中的晶片溫度可能會來到80-90度，因此我於電板上新增了散熱風扇的設計。
* **功能驗證:** 緊急停止開關可以完美的關閉所有致動器而不影響機上電腦等重要設備的運行。

未來的改進方向可能包含進一步優化散熱設計、增加電壓/電流監控功能，或整合更多機器人所需的電源管理特性，並期待可以透過MCU進行電壓監控等功能。

## 開源檔案與設計資料

我已經將此專案的設計檔案(包含 EasyEDA Pro 原理圖、PCB Layout) 開源，歡迎參考與交流，也提供DIT實驗室的學弟妹們參考：

*   **OSHWlab Repository:** [點此前往專案 OSHWlab 頁面](https://oshwlab.com/q124498935/18V-pcb)

<!-- Chinese Version Ends -->



