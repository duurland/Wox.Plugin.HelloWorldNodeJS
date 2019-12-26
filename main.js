/**
 * https://github.com/Wox-launcher/Wox/blob/master/JsonRPC/wox.py
 * http://doc.wox.one/en/plugin/create_plugin.html
 */
const { IcoPath } = require("./plugin.json");
const { method, parameters } = JSON.parse(process.argv.slice(2));

const query = parameters.join(" ");
const result = [];

if (method == "query")
  result.push({
    Title: "NodeJS: Hello World",
    Subtitle: `Query: ${query}`,
    IcoPath
  });

if (method == "query" && !query.length)
  result.push({
    Title: "NodeJS: WoxAPI Show Message",
    Subtitle: "Wox.ShowMsg()",
    IcoPath,
    JsonRPCAction: {
      method: "Wox.ShowMsg",
      parameters: ["Title..", "Description.."]
    }
  });

if (result.length) {
  console.log(JSON.stringify({ result }));
}
