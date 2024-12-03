const {
    makeWASocket,
    DisconnectReason,
    useMultiFileAuthState,
} = require("@whiskeysockets/baileys");
const { pino } = require("pino");
const fs = require("fs");
const process = require("process");

const startBot = async () => {
    const { state, saveCreds } = await useMultiFileAuthState("sesi");
    const sock = await makeWASocket({
        printQRInTerminal: false,
        logger: pino({ level: "silent" }),
        auth: state,
    });
    if (!sock.authState.creds.registered) {
        setTimeout(async () => {
            let code = await sock.requestPairingCode(62895353361010);
            console.log(code);
        }, 4000);
    }
    sock.ev.on("creds.update", saveCreds);
    sock.ev.on("connection.update", (u) => {
        const { connection, lastDisconnect } = u;
        if (connection === "close") {
            if (lastDisconnect.error.output.statusCode == 515) {
                startBot();
            } else if (lastDisconnect.error.output.statusCode == 440) {
                startBot();
            } else if (lastDisconnect.error.output.statusCode == 503) {
                startBot();
            }

            startBot();
            console.log(lastDisconnect.error);
        } else if (connection === "open") {
            console.log("Bot telah terhubung");
        }
    });
};

startBot();
