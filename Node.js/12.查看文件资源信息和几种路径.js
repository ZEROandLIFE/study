const fs = require("fs");
//stat 状态status
fs.stat("./代号", (err,data) => {
  if (err) {
    console.log("错误");
    return;
  }
    console.log(data);
    console.log(data.isDirectory());
    console.log(data.isFile());
});
const stats = {
  dev: 1387275673,       // device ID（设备ID，表示文件所在的磁盘设备）
  mode: 33206,           // 文件类型和权限的位掩码（如 16877 = 目录，33206 = 普通文件）
  nlink: 1,              // 硬链接数量（指向该文件的链接数）
  uid: 0,                // 用户ID（文件所有者的用户ID，0通常是root）
  gid: 0,                // 组ID（文件所属组的ID，0通常是root组）
  rdev: 0,               // 设备类型（如果是特殊设备文件，如块设备或字符设备）
  blksize: 4096,         // 文件系统块大小（I/O操作的块大小，单位：字节）
  ino: 19421773393042250, // inode号（文件在文件系统中的唯一标识）
  size: 16,              // 文件大小（单位：字节）
  blocks: 0,             // 分配的磁盘块数（512字节为单位的块数）
  atimeMs: 1768383085048.916, // 最后访问时间（时间戳，毫秒）
  mtimeMs: 1768381607360.3284, // 最后修改时间（文件内容修改，时间戳，毫秒）
  ctimeMs: 1768446136946.4614, // 最后状态变更时间（元数据修改，如权限，时间戳，毫秒）
  birthtimeMs: 1768381155593.5186 // 创建时间（时间戳，毫秒，部分系统不支持）
};

// 补充说明：
// - `atime` (Access Time): 文件最后一次被读取的时间
// - `mtime` (Modified Time): 文件内容最后一次被修改的时间
// - `ctime` (Change Time): 文件元数据（如权限）最后一次被修改的时间
// - `birthtime` (Creation Time): 文件创建时间（并非所有系统都支持）
console.log(__dirname); // 当前脚本所在目录
console.log(__filename); // 当前脚本的完整路径
// 相对路径参照物: 命令行的工作目录
// fs.writeFileSync('./index.html', 'love');

//绝对路径 '全局变量' 保存的是: 所在文件的所在目录的绝对路径
// console.log(__dirname);
fs.writeFileSync(__dirname + '/index.html', 'love');