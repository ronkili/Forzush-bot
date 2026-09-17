module.exports = {
  // =====================
  // FORZUSH BOT
  // =====================

  clientId: "1550132190036099192",
  guildId: "1542452776607555674",

  // =====================
  // STAFF
  // =====================

  // Staff role used by:
  // !rank, !h claims, moderation and ticket controls.
  staffRoleId: "1550135120504299590",

  // =====================
  // MODERATION
  // =====================

  // Role used for Chat Mute.
  muteRoleId: "1550135332341551255",

  // Moderation logs channel.
  // Leave "" if you do not want mod logs.
  modLogsChannelId: "1550135546343456879",

  // =====================
  // TICKETS
  // =====================

  // Category where tickets are created.
  ticketCategoryId: "1542457680872996874",

  // Staff role for normal tickets.
  ticketStaffRoleId: "1550135120504299590",

  // Separate role for Staff Application tickets.
  staffTestTicketRoleId: "1549410021178351667",

  // Ticket close logs + transcripts.
  ticketLogsChannelId: "1550135817698156595",

  // =====================
  // WELCOME
  // =====================

  // Optional fixed welcome channel.
  // Leave "" and the bot will try:
  // welcome / welcomes / ברוכים-הבאים
  // then the server System Channel.
  welcomeChannelId: "1542452777316384791",

  // =====================
  // XP
  // =====================

  xpPrefix: "!",

  xpPerMessageMin: 5,
  xpPerMessageMax: 15,

  xpMessageCooldownMs:
    60 * 1000,

  dailyXpMin: 250,
  dailyXpMax: 500,

  rankXpPerLevel: 500,

  // =====================
  // VIRTUAL XP ARCADE
  // No real money / no purchases / no cashout.
  // =====================

  maxCasinoBet: 1000,

  casinoCooldownMs:
    5 * 1000,

  // =====================
  // XP SHOP
  // =====================

  xpShop: [
    {
      key: "supporter",
      name: "Forzush Supporter",
      emoji: "💙",
      price: 2500,
      roleId:
        "1550136090080583783"
    },
    {
      key: "elite",
      name: "Forzush Elite",
      emoji: "💎",
      price: 5000,
      roleId:
        "1550136338274189372"
    },
    {
      key: "legend",
      name: "Forzush Legend",
      emoji: "👑",
      price: 10000,
      roleId:
        "1550136452954853436"
    }
  ]
};
