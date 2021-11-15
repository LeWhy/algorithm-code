import utils from '../utils/index.js';

class Node {
  key;
  value;
  pre;
  next;

  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return 'key:' + this.key + ' value:' + this.value; 
  }
}

class LRUCache {
  limit;
  hashMap;
  head;
  end;

  constructor(limit) {
    this.limit = limit;
    this.hashMap = {};
  }

  get(key) {
    var node = this.hashMap[key];
    if (!node) return null;
    this.refreshNode(node);
    return node.value;
  }

  put(key, value) {
    var node = this.hashMap[key];
    if (node) {
      // 有对应kv值则刷新value
      node.value = value;
      this.refreshNode(node);
    } else {
      // 没有则存储新值
      var hashSize = Object.keys(this.hashMap).length;
      if (hashSize >= this.limit) {
        var oldKey = this.removeNode(this.head);
        delete this.hashMap[oldKey];
      }
      node = new Node(key, value);
      this.addNode(node);
      this.hashMap[key] = node;
    }
  }

  remove(key) {
    var node = this.hashMap[key];
    this.removeNode(node);
    delete this.hashMap[key];
  }

  refreshNode(node) {
    // 如果是末尾节点则无需移动
    if (node === this.end) {
      return;
    }
    // 移除节点
    this.removeNode(node);
    // 重新插入
    this.addNode(node);
  }

  removeNode(node) {
    if (node === this.head && node === this.end) {
      this.head = undefined;
      this.end = undefined;
    } else if (node === this.end) {
      this.end = this.end.pre;
      this.end.next = undefined;
    } else if (node === this.head) {
      this.head = this.head.next;
      this.head.pre = undefined;
    } else {
      node.pre.next = node.next;
      node.next.pre = node.pre;
    }
    return node.key;
  }

  addNode(node) {
    if (this.end) {
      this.end.next = node;
      node.pre = this.end;
      node.next = undefined;
    }
    this.end = node;
    if (!this.head) {
      this.head = node;
    }
  }

  getInfo() {
    console.log('当前hashMap内信息 ' + new Date());
    console.log('head', this.head.toString());
    console.log('end', this.end.toString());
  }
}

export default function testFunc() {
  console.log(utils.getLine('6.3.2 LRU算法实现'));
  var lruCache = new LRUCache(5);
  lruCache.put("001", " 用户1信息");
  lruCache.put("002", " 用户1信息");
  lruCache.put("003", " 用户1信息");
  lruCache.put("004", " 用户1信息");
  lruCache.put("005", " 用户1信息");
  console.log('录入完毕')
  lruCache.getInfo();
  lruCache.get("002");
  console.log('调用002后')
  lruCache.getInfo();
  lruCache.put("004", " 用户2信息更新");
  console.log('更新004后')
  lruCache.getInfo();
  lruCache.put("006", " 用户6信息");
  console.log('插入006后')
  lruCache.getInfo();
  console.log(lruCache.get("001"));
  console.log(lruCache.get("006"));
}