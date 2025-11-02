# Vachilang
This project is based in the [AnGlonchas/ASMCompilerForVerilog](https://github.com/AnGlonchas/ASMCompilerForVerilog) repository, thanks so much for the idea and the base code!

# Vachilang Syntax Highlighting for VS Code
This is a Visual Studio Code extension that provides syntax highlighting for the Vachilang programming language.
## Features
- Syntax highlighting for Vachilang keywords, comments.
See instructions in the [vscode/README.md](vscode/README.md) file to install the extension.

# Vachilang compiler
The Vachilang compiler is located in the [src/](src/) directory. It translates simple Vachilang assembly code into "binary" instructions for a hypothetical CPU architecture.

## Usage
To compile a Vachilang source file, run the following command:
```bash
vachilang -f <source_file.vachi> -o <output_file.bin>
```
Replace `<source_file.vachi>` with the path to your Vachilang source file and `<output_file.bin>` with the desired output file name.

# Installation
> This guide is assuming you have BunJS installed. If you don't have it yet, please visit [Bun's official website](https://bun.sh/) for installation instructions, also you have a folder `$HOME/.local/bin` where installations puts the compiled javascript files.

To install the Vachilang compiler, follow these steps:
1. Clone the repository:
    ```bash
    git clone https://github.com/CarlosNunezMX/vachilang.git
    ```
2. Navigate to the project directory:
    ```bash
    cd vachilang
    ```
3. Build the project following this command:
    ```bash
    bun run build
    ```
4. (Optional) Add the compiler to your system's PATH for easy access.
5. Verify the installation by checking the version:
    ```bash
    vachilang --version
    ```
