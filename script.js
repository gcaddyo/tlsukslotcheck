// ==UserScript==
// @name         页面自动刷新检查并可用最晚时刻位置脚本
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  每45秒自动刷新页面并在刷新后检查位置是否有变化，如果有则发送通知并尝试预约最早可用日期的最晚时间。
// @author       You
// @match        https://visas-fr.tlscontact.com/services/*
// @grant        GM_xmlhttpRequest
// @grant        GM_openInTab
// @connect      api.day.app
// ==/UserScript==

(function() {
    'use strict';
        function getApiKey() {
            //自定义用户key
            return "替换为您的bark key";
        }

        function scheduleReload() {
            setTimeout(function() {
                location.reload();
            }, 45000); // 45 seconds
        }

        scheduleReload();

        function isValidJson(jsonData) {
            // Check if the jsonData is in the expected date-time format
            return Object.keys(jsonData).every(date =>
                                               /^\d{4}-\d{2}-\d{2}$/.test(date) && typeof jsonData[date] === 'object' &&
                                               Object.keys(jsonData[date]).every(time =>
                                                                                 /^\d{2}:\d{2}$/.test(time) && (jsonData[date][time] === 0 || jsonData[date][time] === 1)
                                                                                )
                                              );
        }

        window.addEventListener('load', function() {
            let jsonData;
            try {
                jsonData = JSON.parse(document.body.textContent);
                if (!isValidJson(jsonData)) {
                    // JSON does not match the expected format, open a new tab with the current page URL and close the current tab
                    GM_openInTab(window.location.href, true);
                    window.close(); // Attempt to close the current tab
                    return; // Stops the script from running further on the current page
                }
            } catch (e) {
                console.error('Error parsing JSON:', e);
                return; // In case of error, also stop further execution
            }

            let availableSlots = [];

            // Modified logic to find and store all available slots
            Object.keys(jsonData).sort().forEach(date => {
                Object.keys(jsonData[date]).sort((a, b) => a.localeCompare(b)).forEach(time => {
                    if (jsonData[date][time] > 0) {
                        availableSlots.push(`${date} ${time}`);
                    }
                });
            });

            if (availableSlots.length > 0) {
                console.log("Available slots:", availableSlots);
                // Send a notification when a slot is available
                GM_xmlhttpRequest({
                    method: "GET",
                    url: `https://api.day.app/${getApiKey()}/有位置了`,
                    onload: function(response) {
                        console.log("Notification sent successfully");
                    },
                    onerror: function(response) {
                        console.error("Failed to send notification");
                    }
                });
            } else {
                console.log("No available slots found.");
            }
        });
})();
