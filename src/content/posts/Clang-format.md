---
title: 快速上手clang-format规范代码
published: 2025-01-28
pinned: false
description: clang-format的简单使用
tags: [Clang-format,教程]
category: 教程
licenseName: "Unlicensed"
author: AdoreATRI
sourceLink: "https://github.com/adoreATRI/Note/tree/main/clang-format"
draft: false
---

# clang-format
- [clang-format](#clang-format)
  - [食用方法](#食用方法)
  - [个人常用配置](#个人常用配置)
  - [拓展内容](#拓展内容)
## 食用方法

1. 下载安装 `clang-format` 工具，记住路径

2. 在vscode中安装 `clang-format` 扩展

3. 将下面配置保存在 `.clang-format` 文件中，放置在项目的根目录下

4. 在vscode设置中，找到`clang-format`扩展设置，Executable Path中填写`clang-format`路径,同时建议打开`Format On Save`选项

5. Ctrl+Shift+P，输入`Format Document`，选择`Clang-Format`即可格式化当前文件

----

## 个人常用配置
```yaml
Language: Cpp
BasedOnStyle: LLVM
UseTab: Never # 使用空格而不是制表符。
IndentWidth: 4 # 缩进宽度为4个空格。
TabWidth: 4 # Tab长度
ColumnLimit: 80 # 单行的长度不超过80字符
BreakBeforeBraces: Allman # 大括号风格
BraceWrapping:
  AfterClass: true # 类定义的大括号另起一行
  AfterControlStatement: true # 控制语句的大括号另起一行
  AfterEnum: true # 枚举的大括号另起一行
  AfterFunction: true # 函数的大括号另起一行
  AfterNamespace: true # 命名空间的大括号另起一行
  AfterObjCDeclaration: true # Objective-C 声明的大括号另起一行
  AfterStruct: true # 结构体的大括号另起一行
  AfterUnion: true # 联合体的大括号另起一行
  AfterExternBlock: true # extern 块的大括号另起一行
  BeforeCatch: true # catch 块的大括号另起一行
  BeforeElse: true # else 块的大括号另起一行
  IndentBraces: false  # 大括号不缩进
```

----

## 拓展内容
clang-format其他配置
```yaml
Language:        Cpp
BasedOnStyle:    Google

#访问声明符缩进
AccessModifierOffset: -4

# 开括号后的对齐(包括小括号/大括号/尖括号), 建议使用Align
# - Align: 对于开括号, 即在换行情况下, 换行的参数跟开括号对齐, 建议使用
# - DontAlign: 不对于开括号, 即换行时使用配置的空格数
# - AlwaysBreak: 永远换行, 即第一个参数都不允许粘连括号, 会强制换行, 换行后使用配置空格数对齐
# - BlockIndent: 同AlwaysBreak, 多了一个操作: 如果参数不固定在同一行, 闭括号将在下一行
AlignAfterOpenBracket: AlwaysBreak

# - 结构休数组统一初始化对齐, 建议不配置, 没过多必要, 详见clang-format doc
# - None: 不做处理, 即保留开发者的代码
# - Left: 左对齐
# - Right: 右对齐
AlignArrayOfStructures: None

# 连续赋值语句的对齐，即多个赋值语句连续出现时的对齐策略配置, 包含多个子配置项
AlignConsecutiveAssignments:
  # 是否启用, 建议不启用
  Enabled:         false
  # 是否跨过空行, 即多个对齐语句中间有空行时, 是否跨过, 如果要开启连续赋值语句的配置, 建议为false
  AcrossEmptyLines: false
  # 是否跨过注释, 建议false
  AcrossComments:  false 
  # 是否跨过复合语句(包括空行及注释), 建议False
  AlignCompound:   false
  AlignFunctionPointers: false
  
  # 是否(右)对齐赋值操作的操作符, 建议true
  PadOperators:    true


# 同AlignConsecutiveAssignments, 表示连续位定义语句出现时, 是否需要对齐:符号, 位变量定义用得少, 可以不开启
AlignConsecutiveBitFields:
  Enabled:         false
  AcrossEmptyLines: false
  AcrossComments:  false
  AlignCompound:   false
  AlignFunctionPointers: false
  PadOperators:    false
AlignConsecutiveDeclarations:
  Enabled:         false
  AcrossEmptyLines: false
  AcrossComments:  false
  AlignCompound:   false
  AlignFunctionPointers: false
  PadOperators:    false

# 宏定义自动对齐
AlignConsecutiveMacros:
  Enabled:         true
  AcrossEmptyLines: false
  AcrossComments:  false
  AlignCompound:   false
  AlignFunctionPointers: false
  PadOperators:    false

AlignConsecutiveShortCaseStatements:
  Enabled:         false
  AcrossEmptyLines: false
  AcrossComments:  false
  AlignCaseColons: false

# 续行符(\\)对齐:
# - DontAlign: 不做操作
# - Left: 尽可能向左对齐, 即最长一行代码为准
# - Right: 跟开发都写的最远的\\对齐(即不会自动缩减你的空格), 建议使用这个
AlignEscapedNewlines: Right
AlignOperands:   Align
AlignTrailingComments:
  Kind:            Always
  OverEmptyLines:  0
AllowAllArgumentsOnNextLine: true
AllowAllParametersOfDeclarationOnNextLine: true
AllowBreakBeforeNoexceptSpecifier: Never
AllowShortBlocksOnASingleLine: Never
AllowShortCaseLabelsOnASingleLine: false
AllowShortCompoundRequirementOnASingleLine: true
AllowShortEnumsOnASingleLine: true
AllowShortFunctionsOnASingleLine: All
AllowShortIfStatementsOnASingleLine: Never
AllowShortLambdasOnASingleLine: All
AllowShortLoopsOnASingleLine: false
AlwaysBreakAfterDefinitionReturnType: None
AlwaysBreakAfterReturnType: None
AlwaysBreakBeforeMultilineStrings: false
AlwaysBreakTemplateDeclarations: MultiLine
AttributeMacros:
  - __capability
BinPackArguments: true
BinPackParameters: true

# 位定义:前后是否增加空格, 可选:
# - Both: 前后都添加
# - Before: 只在前增加
# - After: 只在后增加
# - None: 不增加, 建议, 没有必要因为过多的space(s)影响代码紧凑
BitFieldColonSpacing: None


# 大括号换行
BraceWrapping:
  # 在case后的大括号是否换行
  AfterCaseLabel:  true
  # class后
  AfterClass:      true
  # 控制语句(if/for/while/switch/...)后是否换行
  # - Never: 永远不, 即永远将语句体的大括号放置于控制语句同一行
  # - MultiLine: 多行控制语句才进行换行
  # - Always: 永远换行, 建议
  AfterControlStatement: Always
  AfterEnum:       true
  AfterExternBlock: false
  AfterFunction:   true
  AfterNamespace:  false
  AfterObjCDeclaration: false
  AfterStruct:     true
  AfterUnion:      true
  BeforeCatch:     false
  BeforeElse:      true
  BeforeLambdaBody: false
  BeforeWhile:     true
  IndentBraces:    false
  SplitEmptyFunction: true
  SplitEmptyRecord: true
  SplitEmptyNamespace: true
BreakAdjacentStringLiterals: true
BreakAfterAttributes: Leave
BreakAfterJavaFieldAnnotations: false
BreakArrays:     true
BreakBeforeBinaryOperators: None
BreakBeforeConceptDeclarations: Always


# 大括号换行风格,Custom即可, 具体值可参考上方文档
BreakBeforeBraces: Custom
BreakBeforeInlineASMColon: OnlyMultiline
BreakBeforeTernaryOperators: true
BreakConstructorInitializers: BeforeColon
BreakInheritanceList: BeforeColon
BreakStringLiterals: true
ColumnLimit:     150
CommentPragmas:  '^ IWYU pragma:'
CompactNamespaces: false
ConstructorInitializerIndentWidth: 4
ContinuationIndentWidth: 4

# C++11的统一初始化列表大括号风格, 建议true
Cpp11BracedListStyle: true
DerivePointerAlignment: false
DisableFormat:   false
EmptyLineAfterAccessModifier: Never
EmptyLineBeforeAccessModifier: LogicalBlock
ExperimentalAutoDetectBinPacking: false
FixNamespaceComments: true
ForEachMacros:
  - foreach
  - Q_FOREACH
  - BOOST_FOREACH
IfMacros:
  - KJ_IF_MAYBE

# include代码块操作, 前提是SortIncludes开启:
# - Preserve: 只对每个代码块排序
# - Merge: 对所有代码块合并, 并在合并后排序
# - Regroup: 对所有include块进行分析, 并重新分块, 不建议!
IncludeBlocks:   Preserve


IncludeCategories:
  - Regex:           '^"(llvm|llvm-c|clang|clang-c)/'
    Priority:        2
    SortPriority:    0
    CaseSensitive:   false
  - Regex:           '^(<|"(gtest|gmock|isl|json)/)'
    Priority:        3
    SortPriority:    0
    CaseSensitive:   false
  - Regex:           '.*'
    Priority:        1
    SortPriority:    0
    CaseSensitive:   false
IncludeIsMainRegex: '(Test)?$'
IncludeIsMainSourceRegex: ''
IndentAccessModifiers: false
IndentCaseBlocks: false
IndentCaseLabels: false
IndentExternBlock: AfterExternBlock
IndentGotoLabels: true
IndentPPDirectives: None
IndentRequiresClause: true
IndentWidth:     4
IndentWrappedFunctionNames: false
InsertBraces:    false
InsertNewlineAtEOF: false
InsertTrailingCommas: None
IntegerLiteralSeparator:
  Binary:          0
  BinaryMinDigits: 0
  Decimal:         0
  DecimalMinDigits: 0
  Hex:             0
  HexMinDigits:    0
JavaScriptQuotes: Leave
JavaScriptWrapImports: true
KeepEmptyLinesAtTheStartOfBlocks: true
KeepEmptyLinesAtEOF: false
LambdaBodyIndentation: Signature
LineEnding:      DeriveLF
MacroBlockBegin: ''
MacroBlockEnd:   ''
MaxEmptyLinesToKeep: 1
NamespaceIndentation: None
ObjCBinPackProtocolList: Auto
ObjCBlockIndentWidth: 2
ObjCBreakBeforeNestedBlockParam: true
ObjCSpaceAfterProperty: false
ObjCSpaceBeforeProtocolList: true
# 是否打包构造函数初始化列表, 建议Never, 可选:
# - Never: 永远不做操作, 即一个参数一行
# - BinPack: 两个参数一行
# - CurrentLine: 所有参数放置于一行, 如果放不下, 就一个参数一行
# - NextLine: 同CurrentLine有点像, 唯一不同就是如果放不行, 将剩余参数放置于下一行(即不自动一参一行)
PackConstructorInitializers: NextLine
PenaltyBreakAssignment: 2
PenaltyBreakBeforeFirstCallParameter: 19
PenaltyBreakComment: 300
PenaltyBreakFirstLessLess: 120
PenaltyBreakOpenParenthesis: 0
PenaltyBreakScopeResolution: 500
PenaltyBreakString: 1000
PenaltyBreakTemplateDeclaration: 10
PenaltyExcessCharacter: 1000000
PenaltyIndentedWhitespace: 0
PenaltyReturnTypeOnItsOwnLine: 60


# 指针对齐, 建议Right
PointerAlignment: Right
PPIndentWidth:   -1
QualifierAlignment: Leave
ReferenceAlignment: Pointer


# 是否允许clang-format尝试重新粘合注释(true/false), 不建议使用
ReflowComments:  false
RemoveBracesLLVM: false
RemoveParentheses: Leave
RemoveSemicolon: false

# 模板中的require语句位置, 建议OwnLine
RequiresClausePosition: OwnLine
RequiresExpressionIndentation: OuterScope

# 分隔不同定义块, 建议Always, 可选:
# - Leave - 不处理, 建议, 即由业务决定, 也可以使用Always
# - Always - 永远进行分隔
# - Never: 永远 不进行, 不建议
SeparateDefinitionBlocks: Leave
ShortNamespaceLines: 1
SkipMacroDefinitionBody: false
SortIncludes:    CaseSensitive
SortJavaStaticImport: Before
SortUsingDeclarations: LexicographicNumeric
SpaceAfterCStyleCast: false
SpaceAfterLogicalNot: false
SpaceAfterTemplateKeyword: true
SpaceAroundPointerQualifiers: Default
SpaceBeforeAssignmentOperators: true
SpaceBeforeCaseColon: false
SpaceBeforeCpp11BracedList: false
SpaceBeforeCtorInitializerColon: true
SpaceBeforeInheritanceColon: true
SpaceBeforeJsonColon: false
SpaceBeforeParens: ControlStatements
SpaceBeforeParensOptions:
  AfterControlStatements: true
  AfterForeachMacros: true
  AfterFunctionDefinitionName: false
  AfterFunctionDeclarationName: false
  AfterIfMacros:   true
  AfterOverloadedOperator: false
  AfterPlacementOperator: true
  AfterRequiresInClause: false
  AfterRequiresInExpression: false
  BeforeNonEmptyParentheses: false
SpaceBeforeRangeBasedForLoopColon: true
SpaceBeforeSquareBrackets: false
SpaceInEmptyBlock: false
SpacesBeforeTrailingComments: 1
SpacesInAngles:  Never
SpacesInContainerLiterals: true
SpacesInLineCommentPrefix:
  Minimum:         1
  Maximum:         -1
SpacesInParens:  Never
SpacesInParensOptions:
  InCStyleCasts:   false
  InConditionalStatements: false
  InEmptyParentheses: false
  Other:           false
SpacesInSquareBrackets: false
Standard:        Latest
StatementAttributeLikeMacros:
  - Q_EMIT
StatementMacros:
  - Q_UNUSED
  - QT_REQUIRE_VERSION
TabWidth:        8
UseTab:          Never
VerilogBreakBetweenInstancePorts: true
WhitespaceSensitiveMacros:
  - BOOST_PP_STRINGIZE
  - CF_SWIFT_NAME
  - NS_SWIFT_NAME
  - PP_STRINGIZE
  - STRINGIZE

```