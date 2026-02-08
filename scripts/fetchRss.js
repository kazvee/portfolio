import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';

const parser = new Parser({
  customFields: {
    entry: ['summary', 'content'],
  },
});

export async function fetchRss() {
  const feed = await parser.parseURL('https://blog.kazvee.com/atom.xml');

  function truncate(text, max = 300) {
    if (text.length <= max) return text;
    return text.slice(0, max).replace(/\s+\S*$/, '') + '…';
  }

  const posts = feed.items.map((item, index) => ({
    id: index,
    title: item.title || 'Untitled',
    description: item.summary ? item.summary.trim() : '',
    truncatedContent: item.content ? truncate(item.content.trim(), 300) : '',
    url: `https://blog.kazvee.com${item.link}`,
  }));

  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

  const filePath = path.join(dataDir, 'posts.json');
  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));
  console.log(`✅ RSS feed saved to ${filePath}`);
}

// Run script directly if executed
if (import.meta.url === `file://${process.argv[1]}`) {
  fetchRss();
}
