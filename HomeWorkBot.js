// 숙제 생성기
// Made in Masimellomi7717
// 이 코드는 메신저봇에서 정상구동됩니다. ( 채자봇 테스트 안해봤어요 )
// 이 코드를 변경하거나 수정하여 배포하지 마세요.
// 코드가 정상적으로 작동하지 않을 경우, Github으로 문의 부탁드립니다.
// 이 문장을 삭제하거나, 수정하지 마세요.
// 마시멜로봇이라는 이름을 본인 맛깔나는대로 수정하셔도 문제 없습니다.
// 그러면 유용하게 사용하시길 바랍니다.

// 사용법 
// !숙제 등록 시작 (반이름) (괄호는 빼고 쓰세요.)
// 차례대로 등록하라는 메시지가 뜨면 수학 부터 시작해서 국어, 영어, 과학, 추가 등 다양한 과목을 등록하세요.
// 등록이 끝나면 !등록 끝내기로 등록을 끝내세요.
// 숙제를 찾을때는 !숙제찾기 (본인 반 이름)으로 찾으세요. (물론 괄호는 뺴고)
// 끝

//메인소스
const scriptName = "HomeWorkCheck";
const botname = "마시멜로봇";
const cramschoolname = "" //본인 학원 이름
const Lw = '​'.repeat(500);
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
var d = new Date();
var NowTime = d.getFullYear() + '년 ' + (d.getMonth() + 1) + '월 ' + d.getDate() + '일 ';
  const sender1 = FileStream.read("/sdcard/"+ botname +"/숙제등록/" + room + "/" + "이름" + ".txt");
  const name2 = FileStream.read("/sdcard/" + botname + "/숙제등록/" + room + "/" + "반이름" + ".txt");
  const replace1 = msg.replace("!숙제 등록 시작 ", "");
  if (msg.indexOf("!숙제 등록 시작 ") == 0) {
    replier.reply("숙제 등록을 시작합니다. 현재 " + sender + "님만 숙제 등록이 가능합니다.");
    java.lang.Thread.sleep(3 * 1000);
    FileStream.write("/sdcard/" + botname + "/숙제등록/" + room + "/" + "이름" + ".txt", sender);
    replier.reply("이름을 등록 중입니다.. 잠시만 기다리십시오.");
    java.lang.Thread.sleep(3 * 1000);
    FileStream.write("/sdcard/" + botname = "/숙제등록/" + room + "/" + "반이름" + ".txt", msg.replace("!숙제 등록 시작 ", ""));
    replier.reply("반 이름을 등록합니다.. 잠시만 기다리십시오.");
    java.lang.Thread.sleep(2 * 1000);
    FileStream.write("/sdcard/"+ botname + "/숙제/" + msg.replace("!숙제 등록 시작 ", "") + "/" + "숙제" + ".txt", NowTime + " "+ cramschoolname + " " + msg.replace("!숙제 등록 시작 ", "") + " 숙제 \n\n작성자 : " + sender + "\n\n\n");
    replier.reply("숙제를 차례대로 등록합니다. 수학 숙제 부터 시작해 명령어에 따라서 입력하십시오. \n !수학 등록 숙제내용");
  }
  if (msg.indexOf("!수학 등록 ") == 0 && sender == sender1) {
    FileStream.append("/sdcard/마시멜로봇/숙제/" + room + "/" + NowTime + "일자 등록된 숙제" + ".txt", "수학");
    replier.reply("수학 숙제를 등록합니다. 잠시만 기다리십시오..\n( 수학 과목이 2개 이상인 경우, 줄바꿈으로 등록하십시오. )");
    FileStream.append("/sdcard/마시멜로봇/숙제/" + name2 + "/" + "숙제" + ".txt", "수학 숙제 | " + msg.replace("!수학 등록 ", "") + "\n\n");
    java.lang.Thread.sleep(3 * 1000);
    const math = FileStream.read("/sdcard/마시멜로봇/숙제/" + room + "/" + NowTime + "일자 등록된 숙제" + ".txt");
    replier.reply("수학 숙제를 성공적으로 등록하였습니다.\n그 다음 숙제를 등록하십시오.\n현재 등록된 과목은 " + math + "입니다.");
  }
  if (msg.indexOf("!영어 등록 ") == 0 && sender == sender1) {
    FileStream.append("/sdcard/마시멜로봇/숙제/" + room + "/" + NowTime + "일자 등록된 숙제" + ".txt", ", 영어");
    replier.reply("영어 숙제를 등록합니다. 잠시만 기다리십시오..\n( 영어 과목이 2개 이상인 경우, 줄바꿈으로 등록하십시오. )");
    FileStream.append("/sdcard/마시멜로봇/숙제/" + name2 + "/" + "숙제" + ".txt", "영어 숙제 | " + msg.replace("!영어 등록 ", "") + "\n\n");
    java.lang.Thread.sleep(3 * 1000);
    const English1 = FileStream.read("/sdcard/마시멜로봇/숙제/" + room + "/" + NowTime + "일자 등록된 숙제" + ".txt");
    replier.reply("영어 숙제를 성공적으로 등록하였습니다.\n그 다음 숙제를 등록하십시오.\n현재 등록된 과목은 " + English1 + "입니다.");
  }
  if (msg.indexOf("!국어 등록 ") == 0 && sender == sender1) {
    FileStream.append("/sdcard/마시멜로봇/숙제/" + room + "/" + NowTime + "일자 등록된 숙제" + ".txt", ", 국어");
    replier.reply("국어 숙제를 등록합니다. 잠시만 기다리십시오..\n( 국어 과목이 2개 이상인 경우, 줄바꿈으로 등록하십시오. )");
    FileStream.append("/sdcard/마시멜로봇/숙제/" + name2 + "/" + "숙제" + ".txt", "국어 숙제 | " + msg.replace("!국어 등록 ", "") + "\n\n");
    java.lang.Thread.sleep(3 * 1000);
    const Korean1 = FileStream.read("/sdcard/마시멜로봇/숙제/" + room + "/" + NowTime + "일자 등록된 숙제" + ".txt");
    replier.reply("국어 숙제를 성공적으로 등록하였습니다.\n그 다음 숙제를 등록하십시오.\n현재 등록된 과목은 " + Korean1 + "입니다.");
  }
  if (msg.indexOf("!과학 등록 ") == 0 && sender == sender1) {
    FileStream.append("/sdcard/마시멜로봇/숙제/" + room + "/" + NowTime + "일자 등록된 숙제" + ".txt", ", 과학");
    replier.reply("과학 숙제를 등록합니다. 잠시만 기다리십시오..\n( 과학 과목이 2개 이상인 경우, 줄바꿈으로 등록하십시오. )");
    FileStream.append("/sdcard/마시멜로봇/숙제/" + name2 + "/" + "숙제" + ".txt", "과학 숙제 | " + msg.replace("!과학 등록 ", "") + "\n\n");
    java.lang.Thread.sleep(3 * 1000);
    const Science1 = FileStream.read("/sdcard/마시멜로봇/숙제/" + room + "/" + NowTime + "일자 등록된 숙제" + ".txt");
    replier.reply("과학 숙제를 성공적으로 등록하였습니다.\n그 다음 숙제를 등록하십시오.\n현재 등록된 과목은 " + Science1 + "입니다.");
  }
  if (msg.indexOf("!추가 등록 ") == 0 && sender == sender1) {
    FileStream.append("/sdcard/마시멜로봇/숙제/" + room + "/" + NowTime + "일자 등록된 숙제" + ".txt", ", 추가");
    replier.reply("추가 정보를 등록합니다. 잠시만 기다리십시오..\n( 추가 정보가 2개 이상인 경우, 줄바꿈으로 등록하십시오. )");
    FileStream.append("/sdcard/마시멜로봇/숙제/" + name2 + "/" + "숙제" + ".txt", "추가 정보 | " + msg.replace("!추가 등록 ", "") + "\n\n");
    java.lang.Thread.sleep(3 * 1000);
    const plus1 = FileStream.read("/sdcard/마시멜로봇/숙제/" + room + "/" + NowTime + "일자 등록된 숙제" + ".txt");
    replier.reply("추가 정보를 성공적으로 등록하였습니다.\n!등록 끝내기로 숙제 등록을 종료하십시오.");
  }
  if (msg == "!등록 끝내기") {
    replier.reply("등록 소스코드를 종료합니다..");
    FileStream.append("/sdcard/마시멜로봇/숙제/" + name2 + "/" + "숙제" + ".txt", "이 숙제는 마시멜로봇이 작성하지 않았습니다.\n\n이 숙제는 참고용입니다. \n숙제를 해오지 않았다고 해도 이 내용이 보증이 될 수 없습니다.");
    java.lang.Thread.sleep(3 * 1000);
    replier.reply("숙제 등록을 마쳤습니다.\n!숙제 명령어로 숙제를 확인하세요.");
    FileStream.write("/sdcard/마시멜로봇/숙제등록/" + room + "/" + "이름" + ".txt", "");
    FileStream.write("/sdcard/마시멜로봇/숙제등록/" + room + "/" + "반이름" + ".txt", "");
    FileStream.write("/sdcard/마시멜로봇/숙제/" + room + "/" + NowTime + "일자 등록된 숙제" + ".txt", "");
  }
  if (msg.indexOf("!숙제찾기 ") == 0) {
    const sukje1 = FileStream.read("/sdcard/마시멜로봇/숙제/" + msg.replace("!숙제찾기 ", "") + "/" + "숙제" + ".txt");
    if (sukje1 == null) {
      replier.reply("숙제를 찾는중입니다..  숙제를 찾는데 시간이 걸릴 수 있습니다.");
      java.lang.Thread.sleep(3 * 1000);
      replier.reply("해당 반의 숙제를 찾을 수 없습니다.\n자세한 내용은 전체보기를 클릭하십시오." + Lw + "\n\n숙제가 나오지 않아요.\n\n1. 숙제가 등록된지 확인하세요.\n  채팅을 올려서 등록기록이 있는지 확인하세요.\n\n2. 반 이름을 확인하세요.\n간혹 '반'이라는 글자가 빠질 수 있습니다.\n행복 (X) 행복반 (O) ");
    } else if (msg.indexOf("!숙제찾기 ") == 0) {
      replier.reply("숙제를 찾는중입니다..  숙제를 찾는데 시간이 걸릴 수 있습니다.");
      java.lang.Thread.sleep(3 * 1000);
      const sukje = FileStream.read("/sdcard/마시멜로봇/숙제/" + msg.replace("!숙제찾기 ", "") + "/" + "숙제" + ".txt");
      const replace2 = msg.replace("!숙제찾기 ", "");
      replier.reply("숙제를 찾았습니다. 불러오는데 시간이 걸릴 수 있습니다.");
      java.lang.Thread.sleep(3 * 1000);
      replier.reply(replace2 + "의 숙제입니다.\n전체보기를 눌러 확인하십시오.\n\n" + Lw + sukje);
    }
  }
}
