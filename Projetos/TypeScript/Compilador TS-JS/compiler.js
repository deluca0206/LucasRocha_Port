"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var fs = require("fs");
var path = require("path");
// Função para compilar um arquivo TypeScript para JavaScript
function compile(fileName, outDir) {
    var options = {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2015,
        outDir: outDir,
    };
    // Lê o conteúdo do arquivo TypeScript
    var sourceCode = fs.readFileSync(fileName, "utf8");
    // Cria um programa a partir do código fonte
    var result = ts.transpileModule(sourceCode, { compilerOptions: options });
    // Define o nome do arquivo de saída
    var outFileName = path.join(outDir, path.basename(fileName).replace(".ts", ".js"));
    // Escreve o JavaScript compilado no diretório de saída
    fs.writeFileSync(outFileName, result.outputText, "utf8");
    console.log("Arquivo compilado: ".concat(outFileName));
}
// Diretório de saída
var outDir = "./dist";
// Crie o diretório de saída se não existir
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
}
// Caminho do arquivo TypeScript a ser compilado
var inputFile = "./example.ts";
// Chama a função de compilação
compile(inputFile, outDir);
