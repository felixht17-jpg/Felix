const products = [
    // SẢN PHẨM GỐC BAN ĐẦU
    {
        id: "wifi-au-l11-monthly",
        category: "wifi_home",
        image: "images/L12 mặt trước (1).png",
        price: "¥4,980",
        originalPrice: "¥7,980",
        provider: "AU",
        text: {
            ja: {
                name: "WiFi 5G L11（月額）",
                desc: "5G対応WiFiルーターL11。データ無制限。",
                features: ["5Gデータ無制限", "月額払い", "有効期限：2025/06/20"],
                btn: "今すぐ申し込む"
            },
            en: {
                name: "WiFi 5G L11 (Monthly)",
                desc: "5G WiFi router L11 with unlimited data.",
                features: ["Unlimited 5G data", "Monthly payment", "Valid until: 20/06/2025"],
                btn: "Subscribe Now"
            },
            vi: {
                name: "Wifi 5G L11 (Tháng)",
                desc: "Bộ phát Wifi 5G model L11, data không giới hạn.",
                features: ["Data 5G không giới hạn", "Trả hàng tháng", "Hạn sử dụng: 20/06/2025"],
                btn: "Đăng ký ngay"
            }
        }
    },
    // SẢN PHẨM MỚI (WIFI HOME - GÓI 1 NĂM)
    {
        id: 'wifi-au-l11-1y',
        category: 'wifi_home',
        image: 'images/L12 mặt trước (1).png',
        price: '¥56,980',
        originalPrice: null,
        provider: 'AU',
        text: {
            ja: {
                name: "Wifi 5G L11 (1年プラン)",
                desc: "5G対応WiFiルーターL11。1年間データ無制限パッケージ。",
                features: ["5Gデータ無制限", "1年払い", "有効期限：20/05/2026"],
                btn: "今すぐ申し込む"
            },
            en: {
                name: "Wifi 5G L11 (1 Year Plan)",
                desc: "1-year plan for 5G WiFi router L11 with unlimited data.",
                features: ["Unlimited 5G data", "1 Year term", "Valid until: 20/05/2026"],
                btn: "Subscribe Now"
            },
            vi: {
                name: "Wifi 5G L11 (Gói 1 Năm)",
                desc: "Trọn gói 1 năm sử dụng bộ phát Wifi 5G L11.",
                features: ["Data 5G không giới hạn", "Thời hạn: 1 Năm", "Hạn sử dụng: 20/05/2026"],
                btn: "Đăng ký ngay"
            }
        }
    },
    // SẢN PHẨM MỚI (WIFI HOME - GÓI 3 THÁNG)
    {
        id: 'wifi-au-l11-3m',
        category: 'wifi_home',
        image: 'images/L12 mặt trước (1).png',
        price: '¥18,980',
        originalPrice: null,
        provider: 'AU',
        text: {
            ja: {
                name: "Wifi 5G L11 (3ヶ月プラン)",
                desc: "5G対応WiFiルーターL11。3ヶ月データ無制限パッケージ。",
                features: ["5Gデータ無制限", "3ヶ月払い", "有効期限：20/08/2025"],
                btn: "今すぐ申し込む"
            },
            en: {
                name: "Wifi 5G L11 (3 Month Plan)",
                desc: "3-month plan for 5G WiFi router L11 with unlimited data.",
                features: ["Unlimited 5G data", "3 Month term", "Valid until: 20/08/2025"],
                btn: "Subscribe Now"
            },
            vi: {
                name: "Wifi 5G L11 (Gói 3 Tháng)",
                desc: "Gói 3 tháng sử dụng bộ phát Wifi 5G L11.",
                features: ["Data 5G không giới hạn", "Thời hạn: 3 Tháng", "Hạn sử dụng: 20/08/2025"],
                btn: "Đăng ký ngay"
            }
        }
    },
    // SẢN PHẨM MỚI (WIFI HOME - GÓI 7 THÁNG)
    {
        id: 'wifi-au-l11-7m',
        category: 'wifi_home',
        image: 'images/L12 mặt trước (1).png',
        price: '¥31,980',
        originalPrice: null,
        provider: 'AU',
        text: {
            ja: {
                name: "Wifi 5G L11 (7ヶ月プラン)",
                desc: "5G対応WiFiルーターL11。7ヶ月データ無制限パッケージ。",
                features: ["5Gデータ無制限", "7ヶ月払い", "有効期限：20/12/2025"],
                btn: "今すぐ申し込む"
            },
            en: {
                name: "Wifi 5G L11 (7 Month Plan)",
                desc: "7-month plan for 5G WiFi router L11 with unlimited data.",
                features: ["Unlimited 5G data", "7 Month term", "Valid until: 20/12/2025"],
                btn: "Subscribe Now"
            },
            vi: {
                name: "Wifi 5G L11 (Gói 7 Tháng)",
                desc: "Gói 7 tháng sử dụng bộ phát Wifi 5G L11.",
                features: ["Data 5G không giới hạn", "Thời hạn: 7 Tháng", "Hạn sử dụng: 20/12/2025"],
                btn: "Đăng ký ngay"
            }
        }
    },
    // SẢN PHẨM MỚI (POCKET WIFI X12)
    {
        id: 'pocketwifi-x12',
        category: 'wifi_pocket',
        image: 'images/NUS_black_front-removebg-preview.png',
        price: '¥4,980',
        originalPrice: null,
        provider: 'Standard',
        text: {
            ja: {
                name: "Pocket Wifi X12",
                desc: "データ無制限。コンパクトで、旅行や仕事に最適です。",
                features: ["データ無制限", "バッテリー最大12時間", "10台まで接続可能"],
                btn: "今すぐ申し込む"
            },
            en: {
                name: "Pocket Wifi X12",
                desc: "Unlimited connection, compact, ideal for travel and work.",
                features: ["Unlimited data", "Battery up to 12 hours", "Connect 10 devices"],
                btn: "Subscribe Now"
            },
            vi: {
                name: 'Pocket Wifi X12',
                desc: 'Kết nối không giới hạn, nhỏ gọn, lý tưởng du lịch và làm việc.',
                features: ['Data không giới hạn', 'Pin lên đến 12 tiếng', 'Kết nối 10 thiết bị'],
                btn: "Đăng ký ngay"
            }
        }
    },
    // SẢN PHẨM MỚI (POCKET WIFI GALAXY - GÓI 1 NĂM)
    {
        id: 'wifi-au-galaxy-1y',
        category: 'wifi_pocket',
        image: 'images/GALAXY SANG (1).png',
        price: '¥64,980',
        originalPrice: null,
        provider: 'AU',
        text: {
            ja: {
                name: "Wifi 5G GALAXY (1年プラン)",
                desc: "5G対応Wifi GALAXY。1年間データ無 giới hạnパッケージ。",
                features: ["5Gデータ無 giới hạn", "1 năm", "有効期限：20/05/2026"],
                btn: "今すぐ申し込む"
            },
            en: {
                name: "Wifi 5G GALAXY (1 Year Plan)",
                desc: "1-year plan for 5G WiFi GALAXY with unlimited data.",
                features: ["Unlimited 5G data", "1 Year term", "Valid until: 20/05/2026"],
                btn: "Subscribe Now"
            },
            vi: {
                name: 'Wifi 5G GALAXY (Gói 1 Năm)',
                desc: 'Trọn gói 1 năm sử dụng bộ phát Wifi 5G GALAXY.',
                features: ['Data 5G không giới hạn', 'Thời hạn: 1 Năm', 'Hạn sử dụng: 20/05/2026'],
                btn: "Đăng ký ngay"
            }
        }
    },
    // SẢN PHẨM MỚI (POCKET WIFI GALAXY - GÓI 7 THÁNG)
    {
        id: 'wifi-au-galaxy-7m',
        category: 'wifi_pocket',
        image: 'images/GALAXY SANG (1).png',
        price: '¥37,980',
        originalPrice: null,
        provider: 'AU',
        text: {
            ja: {
                name: "Wifi 5G GALAXY (7ヶ月プラン)",
                desc: "5G対応Wifi GALAXY。7ヶ月データ無 giới hạnパッケージ。",
                features: ["5Gデータ無制限", "7ヶ月", "有効期限：20/12/2025"],
                btn: "今すぐ申し込む"
            },
            en: {
                name: "Wifi 5G GALAXY (7 Month Plan)",
                desc: "7-month plan for 5G WiFi GALAXY with unlimited data.",
                features: ["Unlimited 5G data", "7 Month term", "Valid until: 20/12/2025"],
                btn: "Subscribe Now"
            },
            vi: {
                name: 'Wifi 5G GALAXY (Gói 7 Tháng)',
                desc: 'Gói 7 tháng sử dụng bộ phát Wifi 5G GALAXY.',
                features: ['Data 5G không giới hạn', 'Thời hạn: 7 Tháng', 'Hạn sử dụng: 20/12/2025'],
                btn: "Đăng ký ngay"
            }
        }
    },
    
    // ===================================
    // BỔ SUNG SẢN PHẨM SIM MẪU
    // ===================================
    { 
        id: 'sim-docomo-m100gb-1y',
        category: 'sim_data',
        image: 'images/DOCOMO.png', 
        price: '¥39,800',
        originalPrice: null,
        provider: 'Docomo',
        text: {
            ja: {
                name: "データSIM Docomo (100GB/月・1年)",
                desc: "月間100GB高速データ。Docomo 4G/5Gネットワーク利用。",
                features: ["100GB/月 高速データ", "期間: 1年", "ネットワーク: Docomo 4G/5G"],
                btn: "今すぐ申し込む"
            },
            en: {
                name: "Docomo Data SIM (100GB/month - 1 Year)",
                desc: "100GB high-speed data monthly. Uses Docomo 4G/5G network.",
                features: ["100GB/month high speed", "Term: 1 Year", "Network: Docomo 4G/5G"],
                btn: "Subscribe Now"
            },
            vi: {
                name: "SIM Data Docomo (100GB/Tháng - 1 Năm)",
                desc: "SIM Data Docomo trọn gói 1 năm, 100GB tốc độ cao mỗi tháng.",
                features: ["100GB/tháng tốc độ cao", "Thời hạn: 1 Năm", "Mạng: Docomo 4G/5G"],
                btn: "Đăng ký ngay"
            }
        }
    },
    { 
        id: 'sim-sb-m50gb-3m',
        category: 'sim_data',
        image: 'images/sortbank.png', 
        price: '¥9,980',
        originalPrice: '¥11,980',
        provider: 'Softbank',
        text: {
            ja: {
                name: "データSIM Softbank (50GB/月・3ヶ月)",
                desc: "月間50GB高速データ。Softbank 4G/5Gネットワーク利用。",
                features: ["50GB/月 高速データ", "期間: 3ヶ月", "ネットワーク: Softbank 4G/5G"],
                btn: "今すぐ申し込む"
            },
            en: {
                name: "Softbank Data SIM (50GB/month - 3 Months)",
                desc: "50GB high-speed data monthly. Uses Softbank 4G/5G network.",
                features: ["50GB/month high speed", "Term: 3 Months", "Network: Softbank 4G/5G"],
                btn: "Subscribe Now"
            },
            vi: {
                name: "SIM Data Softbank (50GB/Tháng - 3 Tháng)",
                desc: "SIM Data Softbank trọn gói 3 tháng, 50GB tốc độ cao mỗi tháng.",
                features: ["50GB/tháng tốc độ cao", "Thời hạn: 3 Tháng", "Mạng: Softbank 4G/5G"],
                btn: "Đăng ký ngay"
            }
        }
    },
    { 
        id: 'sim-au-unlimit-monthly',
        category: 'sim_unlimited',
        image: 'images/image (2).png', 
        price: '¥5,980',
        originalPrice: null,
        provider: 'AU',
        text: {
            ja: {
                name: "データSIM AU (無制限・月額)",
                desc: "データ無制限。AU 4G/5Gネットワーク利用。",
                features: ["データ無制限", "期間: 月額", "ネットワーク: AU 4G/5G"],
                btn: "今すぐ申し込む"
            },
            en: {
                name: "AU Data SIM (Unlimited - Monthly)",
                desc: "Unlimited data. Uses AU 4G/5G network.",
                features: ["Unlimited data", "Term: Monthly", "Network: AU 4G/5G"],
                btn: "Subscribe Now"
            },
            vi: {
                name: "SIM Data AU (Không giới hạn - Tháng)",
                desc: "SIM Data AU không giới hạn, trả theo tháng.",
                features: ["Data 4G/5G không giới hạn", "Thời hạn: Hàng tháng", "Mạng: AU 4G/5G"],
                btn: "Đăng ký ngay"
            }
        }
    },
];

// ... (các hàm JS renderProducts, setLang, và DOMContentLoaded giữ nguyên)
// Bạn cần đảm bảo bạn đang dùng phiên bản renderProducts có class CSS mới nhất.