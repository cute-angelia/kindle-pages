var shortcuts = [
  {
    title: "复制、粘贴及其他常规的键盘快捷方式",
    table: [
      { keySource: "Ctrl + X", desc: "剪切选定项。", key: [["Ctrl", "X"]] },
      {
        keySource: "Ctrl + C（或 Ctrl + Insert）",
        desc: "复制选定项。",
        key: [
          ["Ctrl", "C"],
          ["Ctrl", "Insert"],
        ],
      },
      {
        keySource: "Ctrl + V（或 Shift + Insert）",
        desc: "粘贴选定项。",
        key: [
          ["Ctrl", "V"],
          ["Shift", "Insert"],
        ],
      },
      { keySource: "Ctrl + Z", desc: "撤消操作。", key: [["Ctrl", "Z"]] },
      {
        keySource: "Alt + Tab",
        desc: "在打开的应用之间切换。",
        key: [["Alt", "Tab"]],
      },
      {
        keySource: "Alt + F4",
        desc: "关闭活动项，或者退出活动应用。",
        key: [["Alt", "F4"]],
      },
      {
        keySource: "Windows 徽标键  + L",
        desc: "锁定你的电脑。",
        key: [["Win", "L"]],
      },
      {
        keySource: "Windows 徽标键  + D",
        desc: "显示和隐藏桌面。",
        key: [["Win", "D"]],
      },
      { keySource: "F2", desc: "重命名所选项目。", key: [["F2"]] },
      {
        keySource: "F3",
        desc: "在文件资源管理器中搜索文件或文件夹。",
        key: [["F3"]],
      },
      {
        keySource: "F4",
        desc: "在文件资源管理器中显示地址栏列表。",
        key: [["F4"]],
      },
      { keySource: "F5", desc: "刷新活动窗口。", key: [["F5"]] },
      {
        keySource: "F6",
        desc: "循环浏览窗口中或桌面上的屏幕元素。",
        key: [["F6"]],
      },
      { keySource: "F10", desc: "激活活动应用中的菜单栏。", key: [["F10"]] },
      {
        keySource: "Alt + F8",
        desc: "在登录屏幕上显示你的密码。",
        key: [["Alt", "F8"]],
      },
      {
        keySource: "Alt + Esc",
        desc: "按项目打开顺序循环浏览。",
        key: [["Alt", "Esc"]],
      },
      {
        keySource: "Alt + 字母",
        desc: "执行该（带下划线的）字母相关的命令。",
        key: [["Alt", "字母"]],
      },
      {
        keySource: "Alt + Enter",
        desc: "显示所选项目的属性。",
        key: [["Alt", "Enter"]],
      },
      {
        keySource: "Alt + 空格键",
        desc: "打开活动窗口的快捷菜单。",
        key: [["Alt", "Space"]],
      },
      { keySource: "Alt + 向左键", desc: "返回。", key: [["Alt", "←"]] },
      { keySource: "Alt + 向右键", desc: "前进。", key: [["Alt", "→"]] },
      {
        keySource: "Alt + PageUp",
        desc: "向上移动一个屏幕。",
        key: [["Alt", "PageUp"]],
      },
      {
        keySource: "Alt + PageDn",
        desc: "向下移动一个屏幕。",
        key: [["Alt", "PageDn"]],
      },
      {
        keySource: "Ctrl + F4",
        desc: "关闭活动文档（在可全屏显示并允许你同时打开多个文档的应用中）。",
        key: [["Ctrl", "F4"]],
      },
      {
        keySource: "Ctrl + A",
        desc: "选择文档或窗口中的所有项目。",
        key: [["Ctrl", "A"]],
      },
      {
        keySource: "Ctrl + D（或 Delete）",
        desc: "删除选定项，将其移至回收站。",
        key: [["Ctrl", "D"], ["Delete"]],
      },
      {
        keySource: "Ctrl + F",
        desc: "打开搜索（在大多数应用中）。",
        key: [["Ctrl", "F"]],
      },
      {
        keySource: "Ctrl + R（或 F5）",
        desc: "刷新活动窗口。",
        key: [["Ctrl", "R"], ["F5"]],
      },
      { keySource: "Ctrl + Y", desc: "恢复操作。", key: [["Ctrl", "Y"]] },
      {
        keySource: "Ctrl + 向右键",
        desc: "将光标移动到下一个字词的起始处。",
        key: [["Ctrl", "→"]],
      },
      {
        keySource: "Ctrl + 向左键",
        desc: "将光标移动到上一个字词的起始处。",
        key: [["Ctrl", "←"]],
      },
      {
        keySource: "Ctrl + 向下键",
        desc: "将光标移动到下一段落的起始处。",
        key: [["Ctrl", "↓"]],
      },
      {
        keySource: "Ctrl + 向上键",
        desc: "将光标移动到上一段落的起始处。",
        key: [["Ctrl", "↑"]],
      },
      {
        keySource: "Ctrl + Alt + Tab",
        desc: "使用箭头键在所有打开的应用之间进行切换。",
        key: [["Ctrl", "Alt", "Tab"]],
      },
      {
        keySource: "Alt + Shift + 箭头键",
        desc: "当组或磁贴的焦点放在“开始”菜单上时，可将其朝指定方向移动。",
        key: [["Alt", "Shift", "方向键"]],
      },
      {
        keySource: "Ctrl + Shift + 箭头键",
        desc: "当磁贴的焦点放在“开始”菜单上时，将其移到另一个磁贴即可创建一个文件夹。",
        key: [["Ctrl", "Shift", "方向键"]],
      },
      {
        keySource: "Ctrl + 箭头键",
        desc: "打开“开始”菜单后调整其大小。",
        key: [["Ctrl", "方向键"]],
      },
      {
        keySource: "Ctrl + 箭头键+ 空格键",
        desc: "选择窗口中或桌面上的多个单独项目（先用方向键移动，再用空格键选中）。",
        key: [["Ctrl", "方向键", "Space"]],
      },
      {
        keySource: "Ctrl + Shift（及箭头键）",
        desc: "选择文本块。",
        key: [["Ctrl", "Shift", "方向键"]],
      },
      {
        keySource: "Ctrl + Esc",
        desc: "打开“开始”菜单。",
        key: [["Ctrl", "Esc"]],
      },
      {
        keySource: "Ctrl + Shift + Esc",
        desc: "打开任务管理器。",
        key: [["Ctrl", "Shift", "Esc"]],
      },
      {
        keySource: "Ctrl + Shift",
        desc: "如果多种键盘布局可用，则可切换键盘布局。",
        key: [["Ctrl", "Shift"]],
      },
      {
        keySource: "Ctrl + 空格键",
        desc: "打开或关闭中文输入法编辑器 (IME)。",
        key: [["Ctrl", "Space"]],
      },
      {
        keySource: "Shift + F10",
        desc: "显示选定项的快捷菜单。",
        key: [["Shift", "F10"]],
      },
      {
        keySource: "按 Shift 与任何箭头键",
        desc: "在窗口中或桌面上选择多个项目，或在文档中选择文本。",
        key: [["Shift", "方向键"]],
      },
      {
        keySource: "Shift + Delete",
        desc: "删除选定项，无需先移动到回收站。",
        key: [["Shift", "Delete"]],
      },
      {
        keySource: "向右键",
        desc: "打开右侧的下一个菜单，或打开子菜单。",
        key: [["→"]],
      },
      {
        keySource: "向左键",
        desc: "打开左侧的下一个菜单，或关闭子菜单。",
        key: [["←"]],
      },
      { keySource: "Esc", desc: "停止或离开当前任务。", key: [["Esc"]] },
      {
        keySource: "PrtScn",
        desc: "捕获整个屏幕的屏幕截图并将其复制到剪贴板。 注意你可以更改此快捷方式，以便它还可以打开屏幕截取，这允许你编辑屏幕截图。 依次选择“开始” > “设置” > “轻松访问” > “键盘”，然后打开“Print Screen 快捷方式”下的切换开关。使用 PrtScn 键打开屏幕截取",
        key: [["PrtScn"]],
      },
    ],
  },
  {
    title: "Windows 徽标键键盘快捷方式",
    table: [
      {
        keySource: "Windows 徽标键 ",
        desc: "打开或关闭“开始”菜单。",
        key: [["Win"]],
      },
      {
        keySource: "Windows 徽标键  + A",
        desc: "打开快速设置。 在 Windows 11 中更新。",
        key: [["Win", "A"]],
      },
      {
        keySource: "Windows 徽标键  + B ",
        desc: "将焦点设置为任务栏角落的第一个图标。",
        key: [["Win", "B"]],
      },
      {
        keySource: "Windows 徽标键  + C",
        desc: "从 Microsoft Teams 打开聊天。 在 Windows 11 中更新。",
        key: [["Win", "C"]],
      },
      {
        keySource: "Windows 徽标键  + Shift + C",
        desc: "打开超级按钮菜单。",
        key: [["Win", "Shift", "C"]],
      },
      {
        keySource: "Windows 徽标键  + Ctrl + C",
        desc: "打开颜色筛选器（在颜色筛选器设置中首先启用此快捷方式）。",
        key: [["Win", "Ctrl", "C"]],
      },
      {
        keySource: "Windows 徽标键  + D",
        desc: "显示和隐藏桌面。",
        key: [["Win", "D"]],
      },
      {
        keySource: "Windows 徽标键  + E",
        desc: "打开文件资源管理器。",
        key: [["Win", "E"]],
      },
      {
        keySource: "Windows 徽标键  + F",
        desc: "打开反馈中心并获取屏幕截图。",
        key: [["Win", "F"]],
      },
      {
        keySource: "Windows 徽标键  + G",
        desc: "打开 Xbox Game Bar（当游戏处于打开状态时）。",
        key: [["Win", "G"]],
      },
      {
        keySource: "Windows 徽标键  + Alt + B",
        desc: "打开或关闭 HDR。注意: 适用于 Xbox 游戏栏应用版本 5.721.7292.0 或更高版本。 若要更新 Xbox 游戏栏，请转到 Microsoft Store 应用并检查更新。",
        key: [["Win", "Alt", "B"]],
      },
      {
        keySource: "Windows 徽标键  + H",
        desc: "启动语音键入。 在 Windows 11 中更新。",
        key: [["Win", "H"]],
      },
      {
        keySource: "Windows 徽标键  + I",
        desc: "打开设置。",
        key: [["Win", "I"]],
      },
      {
        keySource: "Windows 徽标键  + J",
        desc: "请将焦点设置到可用的 Windows 提示。当出现 Windows 提示时，请将焦点移到提示上。  再次按下键盘快捷方式，将焦点放在屏幕上 Windows 提示所固定的元素上。",
        key: [["Win", "J"]],
      },
      {
        keySource: "Windows 徽标键  + K",
        desc: "从“快速设置”打开“投放”。 在 Windows 11 中更新。",
        key: [["Win", "K"]],
      },
      {
        keySource: "Windows 徽标键  + L",
        desc: "锁定你的电脑或切换帐户。",
        key: [["Win", "L"]],
      },
      {
        keySource: "Windows 徽标键  + M",
        desc: "最小化所有窗口。",
        key: [["Win", "M"]],
      },
      {
        keySource: "Windows 徽标键  + Shift + M",
        desc: "还原桌面上的最小化窗口。",
        key: [["Win", "Shift", "M"]],
      },
      {
        keySource: "Windows 徽标键 + N",
        desc: "打开通知中心和日历。 在 Windows 11 中更新。",
        key: [["Win", "N"]],
      },
      {
        keySource: "Windows 徽标键  + O",
        desc: "锁定设备方向。",
        key: [["Win", "O"]],
      },
      {
        keySource: "Windows 徽标键  + P",
        desc: "选择演示显示模式。",
        key: [["Win", "P"]],
      },
      {
        keySource: "Windows 徽标键  + Ctrl + Q",
        desc: "打开快速助手。",
        key: [["Win", "Ctrl", "Q"]],
      },
      {
        keySource: "Windows 徽标键  + R",
        desc: "打开“运行”对话框。",
        key: [["Win", "R"]],
      },
      {
        keySource: "Windows 徽标键  + Alt + R",
        desc: "在焦点中录制游戏窗口的视频（使用 Xbox Game Bar）。",
        key: [["Win", "Alt", "R"]],
      },
      {
        keySource: "Windows 徽标键  + S",
        desc: "打开搜素。",
        key: [["Win", "S"]],
      },
      {
        keySource: "Windows 徽标键  + Shift + S",
        desc: "获取部分屏幕的屏幕截图。",
        key: [["Win", "Shift", "S"]],
      },
      {
        keySource: "Windows 徽标键  + T",
        desc: "循环浏览任务栏上的应用。",
        key: [["Win", "T"]],
      },
      {
        keySource: "Windows 徽标键  + U",
        desc: "打开辅助功能设置。",
        key: [["Win", "U"]],
      },
      {
        keySource: "Windows 徽标键  + V",
        desc: "打开剪贴板历史记录。 注意默认情况下，剪贴板历史记录未打开。 如果要打开它，请使用此键盘快捷方式，然后选择提示以打开历史记录。 或者，可以选择开始>设置>系统>剪贴板，然后打开剪贴板历史记录下的开关。",
        key: [["Win", "V"]],
      },
      {
        keySource: "Windows 徽标键  + Shift + V",
        desc: "将焦点设置到通知。",
        key: [["Win", "Shift", "V"]],
      },
      {
        keySource: "Windows 徽标键 + W",
        desc: "打开小组件。 在 Windows 11 中更新。",
        key: [["Win", "W"]],
      },
      {
        keySource: "Windows 徽标键  + X",
        desc: "打开“快速链接”菜单。",
        key: [["Win", "X"]],
      },
      {
        keySource: "Windows 徽标键  + Y",
        desc: "在 Windows Mixed Reality 与桌面之间切换输入。",
        key: [["Win", "Y"]],
      },
      {
        keySource: "Windows 徽标键  + Z",
        desc: "打开对齐布局。 在 Windows 11 中更新。",
        key: [["Win", "Z"]],
      },
      {
        keySource: "Windows 徽标键  + 句号 (.) 或分号 (;)",
        desc: "打开表情符号面板。",
        key: [["Win", ". 或 ;"]],
      },
      {
        keySource: "Windows 徽标键  + 逗号 (,)",
        desc: "临时速览桌面。",
        key: [["Win", ","]],
      },
      {
        keySource: "Windows 徽标键  + Pause 键",
        desc: "打开设置>系统>关于。",
        key: [["Win", "Pause"]],
      },
      {
        keySource: "Windows 徽标键  + Ctrl + F",
        desc: "搜索电脑（如果已连接到网络）。",
        key: [["Win", "Ctrl", "F"]],
      },
      {
        keySource: "Windows 徽标键  + 数字",
        desc: "打开桌面，然后启动固定到任务栏的应用（位于数字所指明的位置）。 如果应用已处于运行状态，则切换至该应用。",
        key: [["Win", "1~9"]],
      },
      {
        keySource: "Windows 徽标键  + Shift + 数字",
        desc: "打开桌面，然后启动固定到任务栏的应用新实例（位于数字所指明的位置）。",
        key: [["Win", "Shift", "1~9"]],
      },
      {
        keySource: "Windows 徽标键  + Ctrl + 数字",
        desc: "打开桌面，然后切换至固定到任务栏的应用的最后活动窗口（位于数字所指明的位置）。",
        key: [["Win", "Ctrl", "1~9"]],
      },
      {
        keySource: "Windows 徽标键  + Alt + 数字",
        desc: "打开桌面，然后打开固定到任务栏的应用的“跳转列表”（位于数字所指明的位置）。",
        key: [["Win", "Alt", "1~9"]],
      },
      {
        keySource: "Windows 徽标键  + Ctrl + Shift + 数字",
        desc: "打开桌面，然后以管理员身份打开位于任务栏上指定位置的应用新实例。",
        key: [["Win", "Ctrl", "Shift", "1~9"]],
      },
      {
        keySource: "Windows 徽标键  + Tab",
        desc: "打开任务视图。",
        key: [["Win", "Tab"]],
      },
      {
        keySource: "Windows 徽标键  + 向上键",
        desc: "最大化窗口。",
        key: [["Win", "↑"]],
      },
      {
        keySource: "Windows 徽标键  + Alt + 向上键",
        desc: "将焦点中的窗口贴靠到屏幕的上半部分。 新增Windows 11。",
        key: [["Win", "Alt", "↑"]],
      },
      {
        keySource: "Windows 徽标键  + 向下键",
        desc: "删除屏幕上的当前应用并最小化桌面窗口。",
        key: [["Win", "↓"]],
      },
      {
        keySource: "Windows 徽标键  + Alt + 向下键",
        desc: "将焦点窗口贴靠到屏幕下半部分。 新增Windows 11。",
        key: [["Win", "Alt", "↓"]],
      },
      {
        keySource: "Windows 徽标键  + 向左键",
        desc: "最大化屏幕左侧的应用或桌面窗口。",
        key: [["Win", "←"]],
      },
      {
        keySource: "Windows 徽标键  + 向右键",
        desc: "最大化屏幕右侧的应用或桌面窗口。",
        key: [["Win", "→"]],
      },
      {
        keySource: "Windows 徽标键  + Home",
        desc: "最小化活动桌面窗口之外的所有窗口（在第二个笔划时还原所有窗口）。",
        key: [["Win", "Home"]],
      },
      {
        keySource: "Windows 徽标键  + Shift + 向上键",
        desc: "将桌面窗口拉伸至屏幕顶部和底部。",
        key: [["Win", "Shift", "↑"]],
      },
      {
        keySource: "Windows 徽标键  + Shift + 向下键",
        desc: "在垂直方向上还原/最小化活动桌面窗口，而宽度保持不变。",
        key: [["Win", "Shift", "↓"]],
      },
      {
        keySource: "Windows 徽标键  + Shift + 向左键或向右键",
        desc: "将桌面上的应用或窗口从一台显示器移动至另一台显示器。",
        key: [["Win", "Shift", "← 或 →"]],
      },
      {
        keySource: "Windows 徽标键  + Shift + 空格键",
        desc: "在语言和键盘布局中向后循环。",
        key: [["Win", "Shift", "Space"]],
      },
      {
        keySource: "Windows 徽标键  + 空格键",
        desc: "切换输入语言和键盘布局。",
        key: [["Win", "Space"]],
      },
      {
        keySource: "Windows 徽标键  + Ctrl + 空格键",
        desc: "对之前选择的输入所做的更改。",
        key: [["Win", "Ctrl", "Space"]],
      },
      {
        keySource: "Windows 徽标键  + Ctrl + Enter",
        desc: "打开“讲述人”。",
        key: [["Win", "Ctrl", "Enter"]],
      },
      {
        keySource: "Windows 徽标键 + 加号 (+)",
        desc: "打开放大镜并放大。",
        key: [["Win", "+"]],
      },
      {
        keySource: "Windows 徽标键  + 减号 (-)",
        desc: "缩小放大镜。",
        key: [["Win", "-"]],
      },
      {
        keySource: "Windows 徽标键  + Esc",
        desc: "关闭放大镜。",
        key: [["Win", "Esc"]],
      },
      {
        keySource: "Windows 徽标键  + 正斜杠 (/)",
        desc: "开始输入法复原流程。",
        key: [["Win", "/"]],
      },
      {
        keySource: "Windows 徽标键 + Ctrl + Shift + B",
        desc: "从空白或黑屏唤醒电脑。",
        key: [["Win", "Ctrl", "Shift", "B"]],
      },
      {
        keySource: "Windows 徽标键  + PrtScn",
        desc: "将全屏屏幕截图保存到文件。",
        key: [["Win", "PrtScn"]],
      },
      {
        keySource: "Windows 徽标键  + Alt + PrtScn",
        desc: "将焦点中的游戏窗口的屏幕截图保存到文件（使用 Xbox Game Bar）。",
        key: [["Win", "Alt", "PrtScn"]],
      },
    ],
  },
  {
    title: "命令提示符键盘快捷方式",
    table: [
      {
        keySource: "Ctrl + C（或 Ctrl + Insert）",
        desc: "复制选定文本。",
        key: [
          ["Ctrl", "C"],
          ["Ctrl", "Insert"],
        ],
      },
      {
        keySource: "Ctrl + V（或 Shift + Insert）",
        desc: "粘贴选定文本。",
        key: [
          ["Ctrl", "V"],
          ["Shift", "Insert"],
        ],
      },
      { keySource: "Ctrl + M", desc: "进入标记模式。", key: [["Ctrl", "M"]] },
      {
        keySource: "Alt + 选择键",
        desc: "开始在块模式下选择。",
        key: [["Alt", "选择键"]],
      },
      { keySource: "箭头键", desc: "按指定方向移动光标。", key: [["方向键"]] },
      {
        keySource: "PageUp",
        desc: "将光标向上移动一个页面。",
        key: [["PageUp"]],
      },
      {
        keySource: "PageDn",
        desc: "将光标向下移动一个页面。",
        key: [["PageDn"]],
      },
      {
        keySource: "Ctrl + Home",
        desc: "（标记模式）将光标移动到缓冲区的起始处。<br>（历史记录导航）如果命令行为空，则将视区移动到缓冲区顶部。 否则，请删除命令行中光标左侧的所有字符。",
        key: [["Ctrl", "Home"]],
      },
      {
        keySource: "Ctrl + End",
        desc: "（标记模式）将光标移动到缓冲区的结尾处。<br>（历史记录导航）如果命令行为空，则将视区移动到命令行。 否则，请删除命令行中光标右侧的所有字符。",
        key: [["Ctrl", "End"]],
      },
      {
        keySource: "Ctrl + 向上键",
        desc: "在输出历史记录中上移一行。",
        key: [["Ctrl", "↑"]],
      },
      {
        keySource: "Ctrl + 向下键",
        desc: "在输出历史记录中下移一行。",
        key: [["Ctrl", "↓"]],
      },
    ],
  },
  {
    title: "对话框键盘快捷方式",
    table: [
      { keySource: "F4", desc: "显示活动列表中的项目。", key: [["F4"]] },
      {
        keySource: "Ctrl + Tab",
        desc: "在选项卡中向前移动。",
        key: [["Ctrl", "Tab"]],
      },
      {
        keySource: "Ctrl + Shift + Tab",
        desc: "在选项卡中向后移动。",
        key: [["Ctrl", "Shift", "Tab"]],
      },
      {
        keySource: "Ctrl + 数字 （数字 1-9）",
        desc: "移动到第 n 个选项卡。",
        key: [["Ctrl", "1~9"]],
      },
      { keySource: "Tab", desc: "在选项中向前移动。", key: [["Tab"]] },
      {
        keySource: "Shift + Tab",
        desc: "在选项中向后移动。",
        key: [["Shift", "Tab"]],
      },
      {
        keySource: "Alt + 带下划线的字母",
        desc: "执行可与该（带下划线的）字母相关的命令（或选择该选项）。",
        key: [["Alt", "字母"]],
      },
      {
        keySource: "空格键",
        desc: "如果活动选项为复选框，则选择或清除复选框。",
        key: [["Space"]],
      },
      {
        keySource: "Backspace",
        desc: "如果在“另存为”或“打开”对话框中选择文件夹，则打开上一级别的文件夹。",
        key: [["Backspace"]],
      },
      {
        keySource: "箭头键",
        desc: "如果活动选项是一组选项按钮，请选择一个按钮。",
        key: [["方向键"]],
      },
    ],
  },
  {
    title: "文件资源管理器键盘快捷方式",
    table: [
      { keySource: "Alt + D", desc: "选择地址栏。", key: [["Alt", "D"]] },
      { keySource: "Ctrl + E", desc: "选择搜索框。", key: [["Ctrl", "E"]] },
      { keySource: "Ctrl + F", desc: "选择搜索框。", key: [["Ctrl", "F"]] },
      { keySource: "Ctrl + N", desc: "打开新窗口。", key: [["Ctrl", "N"]] },
      { keySource: "Ctrl + W", desc: "关闭活动窗口。", key: [["Ctrl", "W"]] },
      {
        keySource: "Ctrl + 鼠标滚轮",
        desc: "更改文件和文件夹图标的大小和外观。",
        key: [["Ctrl", "鼠标滚轮"]],
      },
      {
        keySource: "Ctrl + Shift + E",
        desc: "显示选定文件夹上的所有文件夹。",
        key: [["Ctrl", "Shift", "E"]],
      },
      {
        keySource: "Ctrl + Shift + N",
        desc: "创建新文件夹。",
        key: [["Ctrl", "Shift", "N"]],
      },
      {
        keySource: "Num Lock + 星号 (*)",
        desc: "显示选定文件夹下的所有子文件夹。",
        key: [["Num Lock", "*"]],
      },
      {
        keySource: "Num Lock + 加号 (+)",
        desc: "显示选定文件夹中的内容。",
        key: [["Num Lock", "+"]],
      },
      {
        keySource: "Num Lock + 减号 (-)",
        desc: "折叠选定文件夹。",
        key: [["Num Lock", "-"]],
      },
      { keySource: "Alt + P", desc: "显示预览面板。", key: [["Alt", "P"]] },
      {
        keySource: "Alt + Enter",
        desc: "打开选定项的“属性”对话框。",
        key: [["Alt", "Enter"]],
      },
      {
        keySource: "Alt + 向右键",
        desc: "查看下一个文件夹。",
        key: [["Alt", "→"]],
      },
      {
        keySource: "Alt + 向上键",
        desc: "查看该文件夹所在的文件夹。",
        key: [["Alt", "↑"]],
      },
      {
        keySource: "Alt + 向左键",
        desc: "查看上一个文件夹。",
        key: [["Alt", "←"]],
      },
      {
        keySource: "Backspace",
        desc: "查看上一个文件夹。",
        key: [["Backspace"]],
      },
      {
        keySource: "向右键",
        desc: "显示当前选择内容（如果已折叠），或选择第一个子文件夹。",
        key: [["→"]],
      },
      {
        keySource: "向左键",
        desc: "折叠当前选择内容（如果已展开），或选择该文件夹所在的文件夹。",
        key: [["←"]],
      },
      { keySource: "End", desc: "显示活动窗口底部。", key: [["End"]] },
      { keySource: "Home 键", desc: "显示活动窗口顶部。", key: [["Home"]] },
      { keySource: "F11", desc: "最大化或最小化活动窗口。", key: [["F11"]] },
    ],
  },
  {
    title: "虚拟桌面的键盘快捷方式",
    table: [
      {
        keySource: "Windows 徽标键  + Tab",
        desc: "打开任务视图。",
        key: [["Win", "Tab"]],
      },
      {
        keySource: "Windows 徽标键  + Ctrl + D",
        desc: "添加虚拟桌面。",
        key: [["Win", "Ctrl", "D"]],
      },
      {
        keySource: "Windows 徽标键  + Ctrl + 向右键",
        desc: "在你于右侧创建的虚拟桌面之间切换。",
        key: [["Win", "Ctrl", "→"]],
      },
      {
        keySource: "Windows 徽标键  + Ctrl + 向左键",
        desc: "在你于左侧创建的虚拟桌面之间切换。",
        key: [["Win", "Ctrl", "←"]],
      },
      {
        keySource: "Windows 徽标键  + Ctrl + F4",
        desc: "关闭你正在使用的虚拟桌面。",
        key: [["Win", "Ctrl", "F4"]],
      },
    ],
  },
  {
    title: "任务栏键盘快捷方式",
    table: [
      {
        keySource: "Shift + 单击任务栏按钮",
        desc: "打开应用或快速打开另一个应用实例。",
        key: [["Shift", "鼠标左键"]],
      },
      {
        keySource: "Ctrl + Shift + 单击任务栏按钮",
        desc: "以管理员身份打开应用。",
        key: [["Ctrl", "Shift", "鼠标左键"]],
      },
      {
        keySource: "Shift + 右键单击任务栏按钮",
        desc: "显示应用的窗口菜单。",
        key: [["Shift", "鼠标右键"]],
      },
      {
        keySource: "Shift + 右键单击分组任务栏按钮",
        desc: "显示组的窗口菜单。",
        key: [["Shift", "鼠标右键"]],
      },
      {
        keySource: "Ctrl + 单击分组任务栏按钮",
        desc: "循环浏览组的窗口。",
        key: [["Ctrl", "鼠标左键"]],
      },
    ],
  },
  {
    title: "设置键盘快捷方式",
    table: [
      {
        keySource: "Windows 徽标键  + I",
        desc: "打开设置。",
        key: [["Win", "I"]],
      },
      {
        keySource: "Backspace",
        desc: "返回到设置主页。",
        key: [["Backspace"]],
      },
    ],
  },
];
showShortcuts();
