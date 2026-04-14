import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Target,
  BarChart3,
  ShieldCheck,
  Zap,
  Globe,
  History,
  ArrowRight,
  Layout,
  Camera,
  PieChart,
  Monitor,
  Share2,
  Video,
  PenTool,
  Rocket,
  ExternalLink,
  Instagram,
  Linkedin,
  MousePointer2,
  Image as ImageIcon,
  HeartPulse,
  Sparkles,
  Activity,
  Syringe,
  Scissors,
  Award,
  CheckCircle2,
  UserCircle2,
} from "lucide-react";

// ==========================================
// 🎨 【修改區】在這裡直接修改文字與圖片連結
// ==========================================
const WEBSITE_DATA = {
  profile: {
    name: "STRATEGY ARCHITECT",
    avatar:
      "https://cdn.phototourl.com/free/2026-04-10-882cacc5-c0f5-4150-be6a-a8385c189331.png",
    title: "醫美與高端健康產業 · 整合行銷策略官",
    intro:
      "您好，我是心儀，專注於為醫美與生技品牌建構具備法規護城河的商業模型。我深信真正的行銷不應只是盲目追求流量，而是透過理性的數據分析與極致的美學體現，為品牌創造可持續增長的長遠價值。",
    location: "台北, 台灣",
    email: "lulu181026@gmail.com",
  },

  brandSegments: [
    {
      title: "生技產品開發與行銷",
      subtitle: "Biotech & Supplement Products",
      description: "從成分轉化為消費者語言，成功操盤瘦身與保健等機能性產品。",
      brands: [
        {
          name: "醇養妍",
          logo: "https://cdn.phototourl.com/free/2026-04-13-2a7193c7-c73e-4b8d-89ba-84fa45efd8b1.jpg",
          detail: "機能性保健品",
          backInfo: "開創LINE網路商店, 半年內業績達標150萬",
        },
        {
          name: "喜樂纖",
          logo: "https://cdn.phototourl.com/free/2026-04-13-75c726dc-3b10-48ec-921d-6be35b8ce7a0.jpg",
          detail: "養顏美容",
          backInfo: "開創LINE網路商店, 三個月內業績達標80萬",
        },
        {
          name: "暢快錠",
          logo: "https://cdn.phototourl.com/free/2026-04-13-01b78312-1dfc-4c99-89c9-176688b1f79a.jpg",
          detail: "機能性保健品",
          backInfo: "減輕公司庫存量, 三個月內銷售8000盒",
        },
      ],
    },
    {
      title: "美容保養中心經營",
      subtitle: "Aesthetic Care Centers",
      description: "高端 SPA 與皮膚管理中心的 brand 定位與私域流量營運。",
      brands: [
        {
          name: "DV笛絲薇夢",
          logo: "https://cdn.phototourl.com/free/2026-04-13-f5827c34-05e0-47ec-95ce-0815351d19fa.jpg",
          detail: "SPA 美容護膚中心行銷",
          backInfo: "半年內新客業績量單月達300萬",
        },
        {
          name: "DV TOKYO保養品系列",
          logo: "https://cdn.phototourl.com/free/2026-04-13-4ccdc34f-fdb1-4532-8649-45ec408b1712.jpg",
          detail: "DV TOKYO全系列",
          backInfo: "醫美級高客單組合開發",
        },
      ],
    },
    {
      title: "醫美與整外醫療產業",
      subtitle: "Medical Aesthetic & Plastic Surgery",
      description: "深耕連鎖醫美與整形外科，在符合法規前提下創造極致轉換率。",
      brands: [
        {
          name: "君綺醫美診所",
          logo: "https://cdn.phototourl.com/free/2026-04-10-e169a434-9af1-4c1e-9e56-7b5c091a7750.jpg",
          detail: "Jing Chi Clinic",
          backInfo: "協助品牌整合行銷",
        },
        {
          name: "君綺漾醫美診所",
          logo: "https://cdn.phototourl.com/free/2026-04-10-b2a12bd0-6985-4a48-8490-1ba61d4441bb.jpg",
          detail: "Jing Chi YOUNG Clinic",
          backInfo: "開創新品牌, 單月新客業績量達1000萬",
        },
        {
          name: "雅丰診所",
          logo: "https://cdn.phototourl.com/free/2026-04-10-c9e683cf-01ad-40e6-908d-5b40c94bde7a.png",
          detail: "Aphrodite Clinic",
          backInfo: "深耕整外、大腸直腸、腸胃手術等行銷整合",
        },
      ],
    },
    {
      title: "醫師個人行銷策略",
      subtitle: "Physician Branding & Authority",
      description: "打造醫師個人特質，透過內容矩陣建立醫師專業與患者深度信任。",
      brands: [
        {
          name: "劉昌杰醫師",
          logo: "https://cdn.phototourl.com/member/2026-04-10-374ca507-2d79-4e3b-bfd5-f595cf848a1d.jpg",
          detail: "案例影片執行且製作",
          backInfo: "從 0 打造百萬流量",
        },
        {
          name: "陳聿醫師",
          logo: "https://cdn.phototourl.com/member/2026-04-10-a420c306-d371-4fa0-8147-cbc19a33aa1a.jpg",
          detail: "影片執行並製作",
          backInfo: "高信任專業敘事內容",
        },
        {
          name: "陳耕醫師",
          logo: "https://cdn.phototourl.com/member/2026-04-10-18731b7c-3443-4267-97d0-0967abeaa767.jpg",
          detail: "全整合規畫行銷企劃",
          backInfo: "打造個人魅力鎖定整外需求族群",
        },
      ],
    },
  ],

  // 📈 【數據證明策略價值】文字已優化字體大小
  impactStats: [
    {
      label: "新品牌帶客量增長",
      value: "1000萬",
      sub: "Revenue Growth",
      desc: "診所創立內容佈局，成功走進族群並為診所帶來穩定業績。",
    },
    {
      label: "保健品牌銷售",
      value: "8000盒",
      sub: "Sales Volume",
      desc: "成功讓公司減低庫存壓力，三個月達網路銷售目標。",
    },
    {
      label: "廣告投放",
      value: "成效比 >10",
      sub: "ROAS Performance",
      desc: "在嚴格符合醫療法規範下，精準受眾漏斗設計讓廣告成效比大於10。",
    },
    {
      label: "有效帶客成長",
      value: "45%",
      sub: "Customer Growth",
      desc: "執行整合行銷及影片，讓醫師個人帶來穩定新客量。",
    },
  ],

  portfolio: {
    website: [
      {
        title: "君綺醫美官方網站",
        client: "Jing Chi Clinic",
        desc: "結合療程介紹以及案例合輯，增加網站豐富度",
        image:
          "https://cdn.phototourl.com/free/2026-04-10-e169a434-9af1-4c1e-9e56-7b5c091a7750.jpg",
        link: "https://www.jing-chi.com.tw/",
      },
      {
        title: "君綺漾醫美官方網站",
        client: "Jing Chi YOUNG Clinic",
        desc: "為新品牌從0開始整合架構，專為年輕族群設計打造全新形象。",
        image:
          "https://cdn.phototourl.com/free/2026-04-10-b2a12bd0-6985-4a48-8490-1ba61d4441bb.jpg",
        link: "https://www.jcyoung.tw/",
      },
      {
        title: "雅丰診所官方網站",
        client: "Aphrodite Clinic",
        desc: "維護並建立新主題頁面，使用者流程優化。",
        image:
          "https://cdn.phototourl.com/free/2026-04-10-c9e683cf-01ad-40e6-908d-5b40c94bde7a.png",
        link: "https://www.aphrodite.com.tw/",
      },
      {
        title: "陳耕醫師官方網站",
        client: "DR.CHEN KENG Professional",
        desc: "個人醫師形象建立品牌官網，結合醫師魅力與個人特質。",
        image:
          "https://cdn.phototourl.com/free/2026-04-10-566a9f41-a84f-4ccb-af49-4d90fe9b8861.jpg",
        link: "https://chenkeng.tw/",
      },
    ],
    social: [
      {
        title: "FB整外粉專經營",
        client: "FB Aphrodite",
        desc: "針對高淨值客群設計的整外醫學社群內容，維持品牌稀缺感。",
        image:
          "https://cdn.phototourl.com/free/2026-04-10-1765533e-0edf-4bb9-9332-0b609d177e2a.jpg",
        link: "https://www.facebook.com/aphrolinkou",
      },
      {
        title: "IG brand視覺重塑",
        client: "IG DR.CHEN KENG",
        desc: "根據醫師特色重新建構個人品牌，在一年內自然增長45%有效客群。",
        image:
          "https://cdn.phototourl.com/free/2026-04-10-df223a4b-93f1-4b2d-9367-cabf6baa106b.jpg",
        link: "https://www.instagram.com/dr_chen_keng/",
      },
      {
        title: "Youtube頻道製作",
        client: "Youtube Jing Chi",
        desc: "企劃並執行Youtube長影片內容，包含設計、廣告推廣、故事行銷",
        image:
          "https://cdn.phototourl.com/free/2026-04-10-1f58150f-7b75-4355-9814-7e0c39c07ecf.jpg",
        link: "https://www.youtube.com/@jingchi6486",
      },
      {
        title: "KOL合作推廣企劃",
        client: "KOL promotion",
        desc: "串連50+位社群影響者同步推廣，引發社群討論度。 ",
        image:
          "https://cdn.phototourl.com/free/2026-04-10-b0b2b628-166d-4220-a8e7-c6e66a1fd66a.jpg",
        link: "https://www.jcyoung.tw/beautiful-category/beautynews/",
      },
      {
        title: "NEW健康醫學品牌經營",
        client: "Aphrodite Health Center",
        desc: "為中壯年族群建構健康醫學中心，推廣再生醫療項目、痔瘡手術、乳房超音波等服務 ",
        image:
          "https://cdn.phototourl.com/free/2026-04-10-431f7746-9ec5-49e1-8753-d2184893ffb3.jpg",
        link: "https://www.facebook.com/profile.php?id=61573324170506",
      },
    ],
    video: [
      {
        title: "醫師專業紀錄reels",
        client: "胸腔外科 陳聿醫師",
        desc: "挖掘醫師背後的專業匠心，透過敘事建立專業與溫度。",
        image:
          "https://cdn.phototourl.com/member/2026-04-10-a420c306-d371-4fa0-8147-cbc19a33aa1a.jpg",
        link: "https://www.instagram.com/thoracic_surgeon_dr_chen_yu/",
      },
      {
        title: "醫師案例分享reels",
        client: "整形外科 陳耕醫師",
        desc: "持續塑造醫師個人形象，減少醫病距離感，增進整體互動。",
        image:
          "https://cdn.phototourl.com/member/2026-04-10-18731b7c-3443-4267-97d0-0967abeaa767.jpg",
        link: "https://www.instagram.com/dr_chen_keng/",
      },
      {
        title: "醫師案例分享reels",
        client: "整形外科 劉昌杰醫師",
        desc: "將複雜醫療資訊轉化為 30 秒易懂資訊，累積百萬觀看量。",
        image:
          "https://cdn.phototourl.com/member/2026-04-10-374ca507-2d79-4e3b-bfd5-f595cf848a1d.jpg",
        link: "https://www.instagram.com/dr.tomjliu/",
      },
      {
        title: "整外案例推廣youtube",
        client: "雅丰診所",
        desc: "案例拍攝、追蹤、腳本撰寫、設計、剪輯一次包辦。",
        image:
          "https://cdn.phototourl.com/member/2026-04-10-dd243721-c2c3-41ee-b329-9c5bb9d8331c.jpg",
        link: "https://www.youtube.com/watch?v=aGPAoU47naw&t=18s",
      },
      {
        title: "整外案例推廣youtube",
        client: "雅丰診所",
        desc: "案例拍攝、追蹤、腳本撰寫、設計、剪輯一次包辦。",
        image:
          "https://cdn.phototourl.com/member/2026-04-10-0a365fa6-31fc-4e27-b617-4029d19a9a0e.jpg",
        link: "https://www.youtube.com/watch?v=vNeN6zI9leQ&t=3s",
      },
      {
        title: "整外案例推廣youtube",
        client: "君綺診所",
        desc: "腳本策畫及撰寫、與導演討論視覺及畫面呈現。",
        image:
          "https://cdn.phototourl.com/member/2026-04-10-38aa829a-2a5c-4bc6-97c9-e2c258f8cd67.jpg",
        link: "https://www.youtube.com/watch?v=ce1ULa2SZbc",
      },
      {
        title: "生技產品形象廣告",
        client: "DV產品形象廣告 隋棠代言",
        desc: "腳本策畫及撰寫、與導演討論視覺及畫面呈現。",
        image:
          "https://cdn.phototourl.com/member/2026-04-10-acf38eb5-f4bc-4f13-a287-851728c6df7c.jpg",
        link: "https://www.youtube.com/watch?v=xpr9V46ug2o",
      },
      {
        title: "生技產品形象廣告",
        client: "DV產品形象廣告 吳淡如代言",
        desc: "腳本策畫及撰寫、與導演討論視覺及畫面呈現。",
        image:
          "https://cdn.phototourl.com/member/2026-04-10-feb115bc-46a3-4016-91e3-7668794c3438.jpg",
        link: "https://www.youtube.com/watch?v=2ctmJA-M9Mg",
      },
      {
        title: "健康醫學形象影片",
        client: "君綺健康服務",
        desc: "腳本策畫及撰寫、與導演討論視覺及畫面呈現。",
        image:
          "https://cdn.phototourl.com/free/2026-04-10-600bfe62-f027-4343-983d-23fe331bab9b.jpg",
        link: "https://www.youtube.com/watch?v=2H3Z1Xdaif8",
      },
      {
        title: "醫美醫師形象影片",
        client: "君綺醫美診所",
        desc: "腳本策畫及撰寫、與導演討論視覺及畫面呈現。",
        image:
          "https://cdn.phototourl.com/member/2026-04-10-bfe2ca39-367d-4821-9456-6050a44680b6.jpg",
        link: "https://www.youtube.com/watch?v=iJO-DH0aAVc",
      },
    ],
    design: [
      {
        title: "整體視覺形象規劃",
        client: "Design 2026",
        desc: "找尋屬於並符合品牌或個人的形象設計",
        image:
          "https://cdn.phototourl.com/free/2026-04-10-b18eb0a8-7b45-4d08-b389-10c61ddbb807.jpg",
        link: "#",
      },
      {
        title: "社群圖卡系統",
        client: "System color Marketing",
        desc: "個人化圖文範本。",
        image:
          "https://cdn.phototourl.com/free/2026-04-10-073d880d-3b7b-4028-8924-205d93f56167.jpg",
        link: "#",
      },
      {
        title: "診間展示",
        client: "Clinic Catalogue/Flyer",
        desc: "標準產品說明及服務設計製作。",
        image:
          "https://cdn.phototourl.com/free/2026-04-10-137cd554-a195-4d71-b28a-f758676b7519.jpg",
        link: "#",
      },
      {
        title: "案例設計",
        client: "Case Design",
        desc: "案例呈現、修飾光源及細微照片誤差，符合耐看設計。",
        image:
          "https://cdn.phototourl.com/free/2026-04-10-3db9157f-bfb1-4be1-b63c-2edce3874879.jpg",
        link: "#",
      },
      {
        title: "外招設計",
        client: "Outdoor Sign",
        desc: "大型外招及外部廣告牆設計",
        image:
          "https://cdn.phototourl.com/free/2026-04-10-1e65fe34-edd5-4076-aa3a-c7f51d71949d.jpg",
        link: "#",
      },
    ],
    execution: [
      {
        title: "診所開幕記者會",
        client: "君綺診所",
        desc: "協助拍攝、採購、規劃並執行統籌管理。",
        image:
          "https://cdn.phototourl.com/free/2026-04-13-e80aefaf-f053-4792-a05a-d7d3aad91d57.png",
        link: "#",
      },
      {
        title: "吳淡如代言產品廣告企劃",
        client: "麗彤生醫",
        desc: "整合並執行腳本、攝影棚、導演、燈光、平面照及廣告拍攝。",
        image:
          "https://cdn.phototourl.com/free/2026-04-13-8e990e06-483d-4a1e-9a73-d7957c9f7911.png",
        link: "#",
      },
      {
        title: "中廣廣播電台合作企劃",
        client: "麗彤生醫",
        desc: "整合並執行專題訪問、醫師講稿、腳本撰寫。",
        image:
          "https://cdn.phototourl.com/free/2026-04-13-0dbd8179-05eb-4cf2-9c48-39026f1eab8f.png",
        link: "#",
      },
      {
        title: "TVBS健康2.0專訪企劃",
        client: "麗彤生醫",
        desc: "整合並執行專題訪問、醫師講稿、腳本撰寫。",
        image:
          "https://cdn.phototourl.com/free/2026-04-13-2ceed35a-b8cd-4697-9659-aa8a605a42e9.png",
        link: "#",
      },
      {
        title: "健康VIP茶會活動",
        client: "君綺診所",
        desc: "舉辦茶會活動並執行,當日帶來1000萬收益。",
        image:
          "https://cdn.phototourl.com/free/2026-04-13-497397d8-e2f0-448e-86a1-7793efcb3202.png",
        link: "#",
      },
      {
        title: "整外醫學年會",
        client: "雅丰診所",
        desc: "與會整外醫學會活動、拍攝並協同訪問企劃。",
        image:
          "https://cdn.phototourl.com/free/2026-04-13-2f416b59-ab34-4abb-a4a2-9671d6e9094c.png",
        link: "#",
      },
    ],
  },

  milestones: [
    {
      year: "2022 - Present",
      title: "雅丰診所",
      company: "整外專科&大腸直腸專科&再生醫學",
      desc: "專注於整外專科及專業外科技術行銷建構與年度增長策略。",
    },
    {
      year: "2018 - 2022",
      title: "君綺漾醫美診所",
      company: "為年輕族群打造全新醫美形象品牌",
      desc: "主導年輕族群，從0到1建構品牌形象、品牌行銷並執行多種企劃。",
    },
    {
      year: "2018 - 2022",
      title: "君綺醫美診所",
      company: "全台醫美連鎖品牌",
      desc: "協助並同步行銷連鎖品牌醫美診所行銷與企劃執行。",
    },
    {
      year: "2017 - 201８",
      title: "麗彤生醫",
      company: "生醫保健＄美妝美容垂直體系",
      desc: "開創網路商店並突破銷售量，門市轉化率單月可達破300萬新客業績",
    },
  ],
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("website");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const portfolioCategories = [
    { id: "website", label: "網站建構", icon: <Monitor size={18} /> },
    { id: "social", label: "社群經營", icon: <Share2 size={18} /> },
    { id: "video", label: "影片企劃", icon: <Video size={18} /> },
    { id: "design", label: "圖文製作", icon: <PenTool size={18} /> },
    { id: "execution", label: "活動企劃", icon: <Rocket size={18} /> },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen text-[#2D2926] font-sans selection:bg-[#E8DED3] relative overflow-hidden">
      {/* 全域 CSS 用於 3D 翻轉動畫 */}
      <style>{`
        .flip-card {
          background-color: transparent;
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #E8DED3;
        }
        .flip-card-back {
          background-color: #423D33;
          color: white;
          transform: rotateY(180deg);
          padding: 20px;
          flex-direction: column;
        }
      `}</style>

      {/* 背景紋理 */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1]"
        style={{
          backgroundImage: `url("https://www.transparenttextures.com/patterns/marble.png")`,
        }}
      ></div>
      <div className="fixed inset-0 z-[-2] bg-[#F8F7F5]"></div>

      {/* 導覽列 */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-[#E8DED3]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="text-xl font-serif tracking-[0.15em] font-bold text-[#423D33]">
            {WEBSITE_DATA.profile.name.split(" ")[0]}{" "}
            <span className="text-[#C4A484]">|</span> ARCHITECT
          </div>
          <div className="hidden md:flex space-x-10 items-center">
            {["home", "portfolio", "impact", "history", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-[11px] tracking-widest font-bold text-[#6B6359] hover:text-[#C4A484] transition-colors uppercase"
              >
                {id === "portfolio"
                  ? "Portfolio"
                  : id === "impact"
                  ? "Impact"
                  : id === "history"
                  ? "Experience"
                  : id}
              </button>
            ))}
          </div>
          <button
            className="md:hidden text-[#423D33]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center px-8 pt-20"
      >
        <div className="max-w-7xl mx-auto z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 border border-[#C4A484] text-[#C4A484] text-[10px] tracking-[0.3em] font-bold uppercase mb-8">
                Independent Strategy Consultant
              </div>
              <h1 className="text-6xl lg:text-8xl font-serif text-[#2D2926] leading-[1.1] mb-10 tracking-tighter">
                貼近所需 <br />
                <span className="italic font-light text-[#8C8376]">
                  成就價值
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-[#423D33] leading-relaxed font-serif italic mb-8">
                「行銷不只是購買流量，而是建構品牌持久的防禦率。」
              </p>
              <p className="text-[#6B6359] text-lg leading-relaxed font-light max-w-xl mb-10">
                {WEBSITE_DATA.profile.intro}
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="group flex items-center gap-4 px-10 py-6 bg-[#423D33] text-white text-[11px] tracking-[0.2em] font-bold hover:bg-[#2D2926] transition-all"
              >
                START A PROJECT{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-72 h-96 md:w-80 md:h-[480px]">
                <div className="absolute inset-0 border border-[#C4A484] translate-x-4 translate-y-4 -z-10"></div>
                <div className="absolute inset-0 bg-white shadow-2xl overflow-hidden">
                  <img
                    src={WEBSITE_DATA.profile.avatar}
                    alt={WEBSITE_DATA.profile.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#423D33] text-white p-6 shadow-xl hidden md:block">
                  <div className="text-[10px] tracking-widest font-bold uppercase mb-1">
                    Based in
                  </div>
                  <div className="text-sm font-serif italic">
                    {WEBSITE_DATA.profile.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 作品展示區 */}
      <section
        id="portfolio"
        className="py-32 px-8 bg-white border-y border-[#E8DED3]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-xs tracking-[0.4em] font-bold text-[#C4A484] uppercase mb-4">
                Curated Portfolio
              </h2>
              <h3 className="text-4xl font-serif text-[#2D2926] leading-tight">
                精選作品集
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {portfolioCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 text-[10px] tracking-widest font-bold uppercase transition-all duration-300 border ${
                    activeTab === cat.id
                      ? "bg-[#423D33] text-white border-[#423D33]"
                      : "bg-transparent text-[#8C8376] border-[#E8DED3] hover:border-[#C4A484]"
                  }`}
                >
                  {cat.icon} {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {WEBSITE_DATA.portfolio[activeTab] &&
              WEBSITE_DATA.portfolio[activeTab].map((item, i) => (
                <a
                  href={item.link}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-[#F8F7F5] border border-[#E8DED3] overflow-hidden hover:shadow-xl transition-all duration-500 relative"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#2D2926]/20 group-hover:bg-transparent transition-colors duration-500"></div>

                    {/* Hover 時顯示的跳轉箭頭按鈕 */}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-[#423D33] px-1">
                        VIEW CASE <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-[9px] tracking-widest font-bold text-[#C4A484] uppercase">
                        / {item.client}
                      </div>
                      <ExternalLink
                        size={14}
                        className="text-[#E8DED3] group-hover:text-[#C4A484] transition-colors"
                      />
                    </div>
                    <h4 className="text-xl font-serif text-[#2D2926] mb-4 group-hover:text-[#C4A484] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[#6B6359] text-sm font-light leading-relaxed mb-6">
                      {item.desc}
                    </p>
                    <div className="w-8 h-px bg-[#E8DED3] group-hover:w-full group-hover:bg-[#C4A484] transition-all duration-500"></div>
                  </div>
                </a>
              ))}
          </div>

          {/* 🏆 分段式品牌牆 */}
          <div className="pt-24 border-t border-[#F1EFEA]">
            <h4 className="text-center text-[11px] tracking-[0.6em] font-bold text-[#C4A484] uppercase mb-24">
              Industry Footprint & Experience
            </h4>

            <div className="space-y-32">
              {WEBSITE_DATA.brandSegments.map((segment, idx) => (
                <div key={idx} className="relative">
                  <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {/* 段落標題與描述 */}
                    <div className="lg:col-span-1 border-l-2 border-[#C4A484] pl-8">
                      <div className="text-[10px] tracking-widest font-bold text-[#C4A484] uppercase mb-2">
                        {segment.subtitle}
                      </div>
                      <h5 className="text-2xl font-serif text-[#2D2926] mb-4">
                        {segment.title}
                      </h5>
                      <p className="text-sm text-[#8C8376] leading-relaxed font-light">
                        {segment.description}
                      </p>
                    </div>

                    {/* LOGO 展示區 - 3D Flip Card */}
                    <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                      {segment.brands.map((brand, bIdx) => (
                        <div key={bIdx} className="group text-center">
                          <div className="flip-card aspect-square mb-6 h-40 md:h-48">
                            <div className="flip-card-inner">
                              {/* 正面：Logo 視覺 (已改為彩色) */}
                              <div className="flip-card-front bg-[#F8F7F5] shadow-sm overflow-hidden">
                                <img
                                  src={brand.logo}
                                  alt={brand.name}
                                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                              </div>
                              {/* 背面：專業成效與標籤 */}
                              <div className="flip-card-back shadow-xl border border-[#C4A484]">
                                <Sparkles
                                  size={20}
                                  className="text-[#C4A484] mb-3"
                                />
                                <div className="text-[10px] tracking-widest font-bold text-[#C4A484] uppercase mb-1">
                                  Key Strategy
                                </div>
                                <div className="text-sm font-serif leading-tight">
                                  {brand.backInfo}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-[11px] font-bold tracking-widest text-[#423D33] mb-1">
                            {brand.name}
                          </div>
                          <div className="text-[9px] text-[#C4A484] uppercase tracking-[0.2em] font-medium">
                            {brand.detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 量化指標區 - 字體已優化大小 */}
      <section id="impact" className="py-32 px-8 bg-[#2D2926] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-xs tracking-[0.5em] font-bold text-[#C4A484] uppercase mb-6">
              Impact by Numbers
            </h2>
            <h3 className="text-4xl lg:text-5xl font-serif leading-tight">
              數據證明策略價值
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {WEBSITE_DATA.impactStats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center space-y-6"
              >
                {/* 調整數字大小，避免 1000萬 等長文字擠壓 */}
                <div className="text-4xl lg:text-5xl font-serif text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[9px] tracking-[0.2em] font-bold text-[#C4A484] uppercase opacity-80">
                  {stat.sub}
                </div>
                <div className="space-y-3 px-2">
                  <h4 className="text-lg font-serif italic text-[#E8DED3]">
                    {stat.label}
                  </h4>
                  <p className="text-[11px] text-[#8C8376] leading-relaxed font-light">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 經歷區 */}
      <section id="history" className="py-32 px-8 bg-[#F8F7F5]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
          <div className="lg:w-1/3 sticky top-32 h-fit">
            <History className="text-[#C4A484] mb-6" size={32} />
            <h2 className="text-4xl font-serif text-[#2D2926] mb-8 leading-tight">
              專業歷程
              <br />
              與實戰淬煉
            </h2>
          </div>
          <div className="lg:w-2/3 space-y-16">
            {WEBSITE_DATA.milestones.map((m, i) => (
              <div
                key={i}
                className="group relative pl-12 border-l border-[#E8DED3]"
              >
                <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-[#C4A484]"></div>
                <div className="text-[10px] tracking-[0.2em] font-bold text-[#C4A484] mb-2">
                  {m.year}
                </div>
                <h4 className="text-2xl font-serif text-[#2D2926] mb-2">
                  {m.title}
                </h4>
                <div className="text-sm font-bold text-[#8C8376] mb-4 uppercase tracking-widest">
                  {m.company}
                </div>
                <p className="text-[#6B6359] font-light text-sm leading-relaxed max-w-xl">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 聯絡區 */}
      <section id="contact" className="py-32 px-8 bg-[#F1EFEA]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-4xl font-serif text-[#2D2926] mb-10 leading-tight">
              讓你的專業 <br />
              <span className="italic">被正確的人看見</span>
            </h2>
            <div className="space-y-6">
              <div className="text-sm font-bold text-[#423D33] uppercase tracking-widest">
                Email: {WEBSITE_DATA.profile.email}
              </div>
              <div className="text-sm font-bold text-[#423D33] uppercase tracking-widest">
                Location: {WEBSITE_DATA.profile.location}
              </div>
            </div>
          </div>
          <div className="bg-white p-10 lg:p-16 shadow-2xl border-t-4 border-[#423D33]">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                className="w-full bg-transparent border-b border-[#E8DED3] pb-2 outline-none text-sm"
                placeholder="您的姓名"
              />
              <input
                type="email"
                className="w-full bg-transparent border-b border-[#E8DED3] pb-2 outline-none text-sm"
                placeholder="您的聯絡信箱"
              />
              <textarea
                rows="4"
                className="w-full bg-transparent border-b border-[#E8DED3] pb-2 outline-none text-sm resize-none"
                placeholder="請簡述您的需求..."
              ></textarea>
              <button className="w-full py-5 bg-[#423D33] text-white text-[11px] tracking-[0.3em] font-bold hover:bg-black transition-all">
                SUBMIT FOR ANALYSIS
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-[#E8DED3] bg-white">
        <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#8C8376]">
          © {new Date().getFullYear()} {WEBSITE_DATA.profile.name}{" "}
          <span className="mx-4">·</span> High-End Strategy Architect
        </p>
      </footer>
    </div>
  );
};

export default App;
