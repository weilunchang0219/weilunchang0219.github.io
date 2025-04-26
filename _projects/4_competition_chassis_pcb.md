---
layout: page
title: Robot Chassis Control Board
description: 為Eurobot比賽設計的整合式底盤控制系統
img: assets/img/chassis_PCB_main.png
importance: 1
category: Competition
related_publications: false
---

This project features a custom-designed robot chassis control board for the Eurobot competition. The innovative design integrates both logic circuits and high-current motor drivers on a single PCB, shaped to fit the chassis perfectly. The board successfully controls a four-wheel omnidirectional drive system with eight encoders (four for motors and four for odometry), significantly improving space utilization and wiring efficiency.

**Open Source Files:**
*   **OSHWlab Repository:** [Project Link](https://oshwlab.com/q124498935/2025_dit_chassis_board)

# 機器人底盤控制板設計與實作測試

## 關於此PCB

本項目是為參加Eurobot機器人競賽而設計的底盤控制板。面對底盤空間緊湊的挑戰，我突發奇想將邏輯電路與大電流驅動電路整合於同一塊PCB上，並根據底盤形狀定制了PCB外形，大幅優化了空間利用率和線路布局。此控制板成功驅動四輪全向輪底盤，並整合了八個編碼器的信號處理，實現了精確的底盤運動控制。

<div class="row">
<div class="col-sm mt-3 mt-md-0">
{% include figure.liquid loading="eager" path="assets/img/chassis_pcb_top.jpg" title="控制板正面" class="img-fluid rounded z-depth-1" %}
</div>
<div class="col-sm mt-3 mt-md-0">
{% include figure.liquid loading="eager" path="assets/img/chassis_pcb_back.jpg" title="控制板背面" class="img-fluid rounded z-depth-1" %}
</div>
<div class="col-sm mt-3 mt-md-0">
{% include figure.liquid loading="eager" path="assets/img/chassis_PCB_main.png" title="3D渲染圖" class="img-fluid rounded z-depth-1" %}
</div>
</div>
<div class="caption">
控制板的實物照片與3D渲染圖。特殊的外形設計使其能夠完美貼合底盤結構，最大化空間利用率。端子座的位置經過精心設計，位於馬達附近，顯著減少了明線走線的複雜度。
</div>

## 技術特點

### 硬體整合

過往學長設計中，底盤控制系統通常分為邏輯控制板和馬達驅動板兩部分。在空間極為有限的情況下，我創新性地將兩者整合到一塊PCB上，並根據底盤形狀定制了PCB外形。這種設計不僅節省了安裝的空間，還大幅減少了走線複雜度。

<div class="row justify-content-sm-center">
<div class="col-sm-8 mt-3 mt-md-0">
{% include figure.liquid path="assets/img/chassis_top_look.png" title="底盤鈑金外形" class="img-fluid rounded z-depth-1" %}
</div>
<div class="col-sm-4 mt-3 mt-md-0">
{% include figure.liquid path="assets/img/chassis_PCB_sch.png" title="PCB設計圖" class="img-fluid rounded z-depth-1" %}
</div>
</div>
<div class="caption">
左圖為底盤鈑金外形，右圖為部分腳位原理圖截圖。
</div>

### 核心元件選擇

- **MCU**: STM32H723，提供足夠的定時器資源
- **馬達驅動**: Pololu G2 High-Power Motor Driver 18v17（由Pololu贊助實驗室）
- **編碼器支援**: 同時支援Maxon馬達編碼器和GoBilda惰輪編碼器模組

### 編碼器信號處理的挑戰與解決方案

本項目面臨的一個關鍵挑戰是處理兩種不同類型的編碼器信號：

1. **Maxon馬達編碼器**: 需要透過buffer處理信號
2. **GoBilda惰輪編碼器**: 無需buffer處理

經過與團隊成員的共同努力和反覆測試，我們發現了這一關鍵差異，並改動電路設計。此外，由於STM32H723的一個定時器與STLink共用腳位，我們策略性地將較不敏感的Maxon編碼器分配到這些共用腳位，而將更敏感的GoBilda編碼器連接到專用腳位，成功解決了信號干擾問題。


## 設計過程與技巧

### PCB外形設計創新

在設計具有特殊外形的PCB時，我發現EasyEDA Pro直接繪製複雜板框相當困難。為解決這個問題，我採用了一種創新的工作流程：

1. 首先使用AutoCAD繪製精確的板框形狀
2. 將DWG文件匯入EasyEDA進行後續電路設計

這種方法顯著提高了設計效率，使我能夠創建出完美匹配底盤形狀的PCB。

### 通訊協議遇到的狀況

雖然團隊韌體計劃使用microROS作為與ROS2的通訊橋樑，但我們發現STM32H723尚不支援microROS。經過團隊成員的深入研究，我們最終採用了rosserial透過bridge從ROS1通訊至ROS2的解決方案，成功實現了與上層控制系統的穩定通訊。

## 成果

這個底盤控制板完全達到了預期目標：

- 成功整合了邏輯控制和馬達驅動功能
- 精確控制四個直流馬達和八個編碼器
- 完美適配底盤外形，大幅簡化了走線
- 因為惰輪的加入提供了更穩定可靠的底盤運動控制


## 開源分享

本項目已在開源平台分享，歡迎DIT學弟妹參考和使用：  
[OSHWLab項目連結](https://oshwlab.com/q124498935/2025_dit_chassis_board)

## 團隊合作與致謝

本項目的成功離不開團隊成員的共同努力：

- 感謝陳彥霖提點關於不同編碼器使用buffer可能遇到的問題
- 感謝凃紫翔不厭其煩的檢查腳位與訊號的接收狀況
- 感謝洪啟堯在研究STM32H723與microROS相容性方面的貢獻

## 結論與展望

這個底盤控制板項目不僅解決了空間受限的實際問題，還透過奇特的PCB設計提高了系統的整體性能和可靠性。

未來的改進方向可能包括：

- 更換相容於microROS的MCU
- 進一步優化PCB布局以提高抗干擾能力
