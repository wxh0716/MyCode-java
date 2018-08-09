
/*

  10xx 协议
  11xx 产品

* */
const errorCodeMsg = {
    0000:'成功',
    97:'用户权限已经过期，或没有取得授权',
    100:'系统发生故障，暂时无法服务',

    118:'当前页不能为空',
    119:'每页展示数量不能为空',
    120:'查询结果为空',

    1001:'协议名称不能为空',
    1002:'协议类型不能为空',
    1003:'添加协议关联方失败',
    1004:'添加协议维护人失败',
    1005:'修改协议关联方失败',
    1006:'修改协议维护人失败',
    1007:'协议id不能为空',
    1008:'用户和产品之间的关系不能为空',

    1101:'产品代码不能为空',
    1102:'用户id不能为空',
    1103:'产品子类不能为空',
    1104:'费率类型不能为空',
    1105:'费率id不能为空',
    1106:'产品id重复',

    1201: '协议组名称不能为空',
    1202: '协议组ID名称不能为空',
    1302: '协议附件上传异常',
    1304: '附件名不能为空',
    1305: '协议附件不能为空',

    1306: '码表代码不能为空',
    1307: '码表代码中文名称不能为空',
    1308: '码表代码类别不能为空',

    1309: '码表代码和码表类型重复',

    1310: '数据信息重复，不能添加',
    1311: '渠道Id不能为空',
    1312: '渠道名称不能为空',
    1313: '协议渠道关联类型不能为空',
    1314: '协议关联方ID不能为空',
    1315: '协议的维护人ID不能为空',
    1316: '协议维护人关联类型不能为空',
    1317: '主键协议维护人ID不能为空',
    1318: '产品落地机构ID不能为空',
    1319: '产品限制属性ID不能为空',
    1320: '产品类型不能为空',
    1321: '系统不存在',
    1322: '删除异常',
    1323: '基本信息不能为空',
    1324: '传入数据不存在',
    1325: '该信息已经存在',
    1326: '更新或添加异常',
    1327: '操作异常',
    1328: '该接口处于系统使用中，不能删除',
    1329: '该类型已经被使用，不能删除',
    1330: '该记录信息已经被使用',
    1331: '接口操作标识不能为空',
    1332: '接口操作标识错误',
    1333: '该成员已经在项目报工时',
    1334: '当天已经有工时申请记录，暂时不能提交休假申请',
    //车险佣金配置错误代码
    2000: '请求数据为空，请检查。',
    2001: '查询列表时，角色ID不能为空',
    2002: '用户角色ID未匹配！',
    2003: '请求内容不合法，有字段为空',
    2004: '数据校验失败：',
    2005: '系统错误',
    2006: '默认的中元经济公司不存在',
    2007: '保险公司没有相关产品',
    2008: '产品费率信息不存在',
    2009: '生效时间必须晚于当天',
    2010: '该记录不可编辑',
    2011: '当前状态已存在',
    2012: '区域已存在',
    2013: '比率不能超出100%'
}

module.exports = errorCodeMsg;