import * as ts from "typescript";
import * as fs from "fs";
import * as path from "path";

// Função para compilar um arquivo TypeScript para JavaScript
function compile(fileName: string, outDir: string): void {
    const options: ts.CompilerOptions = {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2015,
        outDir,
    };

    // Lê o conteúdo do arquivo TypeScript
    const sourceCode = fs.readFileSync(fileName, "utf8");

    // Cria um programa a partir do código fonte
    const result = ts.transpileModule(sourceCode, { compilerOptions: options });

    // Define o nome do arquivo de saída
    const outFileName = path.join(
        outDir,
        path.basename(fileName).replace(".ts", ".js")
    );

    // Escreve o JavaScript compilado no diretório de saída
    fs.writeFileSync(outFileName, result.outputText, "utf8");

    console.log(`Arquivo compilado: ${outFileName}`);
}

// Diretório de saída
const outDir = "./dist";

// Crie o diretório de saída se não existir
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
}

// Caminho do arquivo TypeScript a ser compilado
const inputFile = "./example.ts";

// Chama a função de compilação
compile(inputFile, outDir);
